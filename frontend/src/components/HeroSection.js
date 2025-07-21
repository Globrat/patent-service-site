import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => (
  <nav className="navbar">
    <div>
      <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
        Globrat
      </Link>
    </div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/solutions">Solutions</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  </nav>
);

export default Navbar;
