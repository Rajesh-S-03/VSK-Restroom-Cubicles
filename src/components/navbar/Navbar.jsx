import React from 'react';
import './Navbar.css';
import logo from '../../assets/vsklogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img
          src={logo}
          alt="VSK"
        />
      </div>

      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/restroom-cubicles">Restroom Cubicles</Link>
        <Link to="/our-clients">Clients</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>

      <a href="#contact" className="navbar-contact">
        <span>Let's Talk</span>
        <span className="arrow">↗</span>
      </a>

      <button className="navbar-menu" aria-label="Open menu">
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Navbar;