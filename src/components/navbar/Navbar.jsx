import React from "react";
import {logo} from "../../assets";
import "./navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links-container">
          <p>
            <a onClick={() => props.changePage('home')} >Home</a>
          </p>
          <p>
            <a onClick={() => props.changePage('gallery')} >Gallery</a>
          </p>
          <p>
            <a onClick={() => props.changePage('about')} >About</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
