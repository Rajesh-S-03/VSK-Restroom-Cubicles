import React from 'react';
import './Navbar.css';
import logo from '../../assets/vsklogo.png';

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
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#projects">Projects</a>
        <a href="#clients">Clients</a>
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