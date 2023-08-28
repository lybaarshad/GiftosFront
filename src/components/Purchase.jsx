import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Purchase = () => {
  const [show, setShow] = useState(false);

  const [quantity, setQuantity] = useState(0);
  const params = useParams();
  const [purchaseProduct, setPurchaseProduct] = useState();
  const [subtotal, setSubtotal] = useState();
  const navigate = useNavigate();

  const handleDecrement = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  const handleIncrement = () => {
    if (quantity > 10) {
      setQuantity(quantity);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    console.log(purchaseProduct);
  };
  const handleContinueShoping = () => {
    navigate("/home");
  };

  const getPurchasingProduct = async () => {
    await fetch(`http://localhost:4000/admin/product/purchase/${params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPurchaseProduct(data);
      });
  };

  useEffect(() => {
    getPurchasingProduct();
  }, []);

  useEffect(() => {
    setSubtotal(quantity * purchaseProduct?.price);
  }, [quantity]);

  return (
    <>
      <section>
        <div className="product-purchase-wrapper">
          <div className="product-purchase-container">
            <div className="product-img">
              <img
                src={`${process.env.REACT_APP_IMAGE_URL}${purchaseProduct?.image}`}
              />
            </div>
            <div className="product-des">
              <span>Product Name </span>
              <span className="purchase-product-des">
                {purchaseProduct?.name}
              </span>
              <span>Price </span>
              <span className="purchase-product-des">
                ${purchaseProduct?.price}
              </span>
              <span>Quantity </span>
              <div className="quantity-counter">
                <span purchase-product-des onClick={handleDecrement}>
                  -
                </span>
                <span purchase-product-des>{quantity}</span>
                <span purchase-product-des onClick={handleIncrement}>
                  +
                </span>
              </div>
              <Link
                className="cart-btn"
                onClick={() => {
                  handleShow(purchaseProduct._id);
                }}
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Bag</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="offcanvas-container">
              <div className="offcanvas-product-img">
                <img
                  src={`${process.env.REACT_APP_IMAGE_URL}${purchaseProduct?.image}`}
                />
              </div>
              <div className="offcanvas-product-des">
                <ul>
                  <li>Product Name <span>{purchaseProduct?.name}</span>
                  </li>
                  <li>
                    Price <span> ${purchaseProduct?.price}</span>
                  </li>
                  <li>
                    Quantity <span>{quantity}</span>
                  </li>
                  <li>
                    Subtotal <span>${subtotal}</span>
                  </li>
                </ul>
                <button onClick={handleContinueShoping}>
                  Continue Shopping
                </button>
                <button> <Link to='/checkout'>Checkout</Link> </button>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </section>
    </>
  );
};

export default Purchase;
