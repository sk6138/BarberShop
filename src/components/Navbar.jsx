import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "../css/Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-text color">BarberShop</Link>
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/services" className="nav-link">Services</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About us</Link>
        </li>
        <li>
          <Link to="/location" className="nav-link">Location</Link>
        </li>
        <li>
          <Link to="/policy" className="nav-link">Cancellation Policy</Link>
        </li>
        {isAuthenticated ? (
          <li>
            <Link to="/login" id="color2" className="nav-link">
              {user.name ? user.name : "Profile"}
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/login" id="color2"  className="nav-link ">Login</Link>
          </li>
        )}
        {/* <li>
          
          <Link to="/login" id="color2"  className="nav-link ">Login</Link>
        </li> */}
      </ul>
      <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
