import React, { useEffect } from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import banner from "../images/banner.jpg";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [index, setIndex] = useState(0);
  const [images , setImages] = useState();
  const navigate = useNavigate();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  
  const fetchProductData = () => {
    fetch("http://localhost:4000/admin/product/list")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setImages(data);
      
      })
  }
  
  useEffect(()=>{
    fetchProductData();



  }, []);
  console.log("images" , images);

  return (
    <>
      <section>
        <div className="banner-wrapper theme-container">
          <div className="banner-container">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img src={banner} className="banner-img" />

                <Carousel.Caption>
                  <p className="banner-des">Welcome Shopping</p>
                  <Button> <Link to="/shop">Buy Now</Link>  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={banner} className="banner-img" />
                <Carousel.Caption>
                  <p className="banner-des">Welcome Shopping</p>
                  <Button> <Link to="/shop">Buy Now</Link>  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={banner} className="banner-img" />
                <Carousel.Caption>
                  <p className="banner-des">Welcome Shopping</p>
                  <Button> <Link to="/shop">Buy Now</Link>  </Button>
                </Carousel.Caption>

              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>

    <section>
    <div className="products-wrapper">
      <h1 className="product-display-head">Latest Products</h1>
    <div className="products-container" >
      {images?.map((item)=>{
        return(
        <div className="products-list">
        <span className="product-name">{item?.name}</span>
        <span className="product-price">${item?.price}</span>
        <button className="shop-btn"> <Link to={'/purchase/'+item._id}>Shop Now</Link> </button>
         <img src={`${process.env.REACT_APP_IMAGE_URL}${item?.image}`} />
        </div> )
      })}
    </div>
    </div>
    </section>
    </>
  );
};

export default Home;
