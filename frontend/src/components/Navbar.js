import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure you have this CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Optional: Add your logo image */}
        {/* <img src="/assets/logo.png" alt="Logo" className="logo-image" /> */}
        <Link to="/">Globrat</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/industries">Industries</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
