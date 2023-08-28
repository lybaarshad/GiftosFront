import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from './../../images/logo.png'



const Navbar = () => {
  const handleLogOut = ()=>{
    localStorage.clear();
  }
  return (
    <>
      <section>
        <div className="nav-wrapper theme-container">
          <div className="nav-container">
          <h1 className="logo-head">Flare</h1>
          <div className="nav-menu">
            <div className="logo">
              <img src={logo} width={70} height={70}/>
            </div>
            <div className="menu-container">
            <div className="menu-options left-option">
            <ul>
              <li><Link to="/home">Home</Link> </li>
              <li><Link to="/shop">Shop</Link> </li>
              <li><Link to="/whyus">Why Us</Link> </li>
              <li><Link to="/reviews">Reviews</Link> </li>
              <li><Link to="/contact">Contact</Link> </li>
            </ul>
            </div>

            <div className="menu-options">
            <ul>
              <li><Link to="/login" onClick={handleLogOut}>  <FontAwesomeIcon icon={faUser} /> Log Out</Link> </li>
              <li><Link to="/shop"> <FontAwesomeIcon icon={faSearch} /> Search</Link> </li>
              <li className="badge-position"><Link to="/shop"> <FontAwesomeIcon icon={faShoppingBag}/> Cart</Link> <span className="cart-badge">0</span> </li>
              <li><Link to="/shop"> <FontAwesomeIcon icon={faHeart} /> Wishlist</Link> </li>
            
            </ul>
            </div>
          </div>
          </div>
          </div>
          </div>
      </section>
    </>
  );
};

export default Navbar;
