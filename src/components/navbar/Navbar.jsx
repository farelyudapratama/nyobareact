import React from "react";
import {logo} from "../../assets";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links-container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#gallery">Gallery</a>
          </p>
          <p>
            <a href="#About">About</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
