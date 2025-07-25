import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const logoRef = useRef(null);

  useEffect(() => {
    // Rotating logo
    gsap.to(logoRef.current, {  
      rotation: 360,
      repeat: -1,
      duration: 60,
      ease: "linear",
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-section">
        <div className="hero-logoo" ref={logoRef}>
          <img src="/quickease.png" alt="QuickEase Logo" id="lgg-imgs" />
        </div>
        <div className="brand-text">
          <h1 className="brand-name gsap-nav-item">QuickEase</h1>
          <p className="tagline gsap-nav-item">Quick. Simple. Yours.</p>
        </div>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li className="gsap-nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="gsap-nav-item">
          <Link to="/products">Products</Link>
        </li>
        <li className="gsap-nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="gsap-nav-item">
          <Link to="/login">
            <button className="login-btn">Login / Signup</button>
          </Link>
        </li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
