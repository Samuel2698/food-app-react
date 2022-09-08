import React, { useState } from "react";
import { FaHamburger, FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <FaHamburger size={40} style={{ marginLeft: "4px" }} />
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>Menu</li>
          <li>Order</li>
          <li>Menu</li>
          <li>Delivery</li>
          <li>Contact</li>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {nav ? (
            <FaTimes size={20} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
