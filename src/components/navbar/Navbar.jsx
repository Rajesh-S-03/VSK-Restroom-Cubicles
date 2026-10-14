import React, { useEffect, useState } from 'react';
import './Navbar.css';

import logo from '../../assets/vsklogo.png';
import secondLogo from '../../assets/clients/V Space.png'

import {
  NavLink,
  Link
} from 'react-router-dom';


const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  /* =========================================================
     SCROLL DETECTION
  ========================================================= */

  useEffect(() => {

    const handleScroll = () => {

      const scrollPosition = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (documentHeight <= 0) {
        setScrolled(false);
        return;
      }

      const scrollPercentage =
        (scrollPosition / documentHeight) * 100;

      setScrolled(scrollPercentage > 50);
    };


    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    handleScroll();


    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };

  }, []);


  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================= */

  const closeMenu = () => {
    setMenuOpen(false);
  };


  /* =========================================================
     PREVENT BODY SCROLL
  ========================================================= */

  useEffect(() => {

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }


    return () => {
      document.body.style.overflow = '';
    };

  }, [menuOpen]);


  return (

    <header
      className={`
        navbar
        ${scrolled ? 'navbar-scrolled' : ''}
        ${menuOpen ? 'menu-open' : ''}
      `}
    >


      {/* =====================================================
          LOGO
      ===================================================== */}

      

<Link
  to="/"
  className="navbar-logo"
  onClick={closeMenu}
>
  <img
    src={logo}
    alt="VSK Enterprises"
    className="navbar-logo-primary"
  />

  <span
    className="navbar-logo-divider"
    aria-hidden="true"
  />

  <img
    src={secondLogo}
    alt="V Space"
    className="navbar-logo-secondary"
  />
</Link>




      {/* =====================================================
          DESKTOP NAVIGATION
      ===================================================== */}

      <nav className="navbar-links">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          Home
        </NavLink>


        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          About
        </NavLink>


        <NavLink
          to="/restroom-cubicles"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          Restroom Cubicles
        </NavLink>


        <NavLink
          to="/our-clients"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          Clients
        </NavLink>
        <NavLink
  to="/gallery"
  className={({ isActive }) =>
    isActive ? 'active' : ''
  }
>
  Gallery
</NavLink>


        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          Contact Us
        </NavLink>

      </nav>


      {/* =====================================================
          LET'S TALK
      ===================================================== */}

  <a
  href="tel:+919791128296"
  className="navbar-contact"
  onClick={closeMenu}
>
  <span>
    LET'S TALK
  </span>

  <span className="arrow">
    ↗
  </span>
</a>


      {/* =====================================================
          MOBILE MENU BUTTON
      ===================================================== */}

      <button
        type="button"
        className={`
          navbar-menu
          ${menuOpen ? 'open' : ''}
        `}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={
          menuOpen
            ? 'Close menu'
            : 'Open menu'
        }
        aria-expanded={menuOpen}
      >

        <span></span>
        <span></span>

      </button>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`
          mobile-menu
          ${menuOpen ? 'mobile-menu-open' : ''}
        `}
      >

        <div className="mobile-menu-inner">


          {/* =================================================
              LABEL
          ================================================= */}

          <div className="mobile-menu-label">
            NAVIGATION
          </div>


          {/* =================================================
              LINKS
          ================================================= */}

          <nav className="mobile-links">


            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >

              <span className="mobile-link-number">
                01
              </span>

              <span>
                Home
              </span>

              <span className="mobile-link-arrow">
                ↗
              </span>

            </NavLink>


            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >

              <span className="mobile-link-number">
                02
              </span>

              <span>
                About
              </span>

              <span className="mobile-link-arrow">
                ↗
              </span>

            </NavLink>


            <NavLink
              to="/restroom-cubicles"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >

              <span className="mobile-link-number">
                03
              </span>

              <span>
                Restroom Cubicles
              </span>

              <span className="mobile-link-arrow">
                ↗
              </span>

            </NavLink>


            <NavLink
              to="/our-clients"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >

              <span className="mobile-link-number">
                04
              </span>

              <span>
                Clients
              </span>

              <span className="mobile-link-arrow">
                ↗
              </span>

            </NavLink>

             <NavLink
              to="/gallery"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >

              <span className="mobile-link-number">
                05
              </span>

              <span>
                Gallery
              </span>

              <span className="mobile-link-arrow">
                ↗
              </span>

            </NavLink>


            <NavLink
              to="/contact-us"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >

              <span className="mobile-link-number">
                06
              </span>

              <span>
                Contact Us
              </span>

              <span className="mobile-link-arrow">
                ↗
              </span>

            </NavLink>


          </nav>


          {/* =================================================
              MOBILE FOOTER
          ================================================= */}

          <div className="mobile-menu-footer">

            <span>
              VSK ENTERPRISES
            </span>

            <span>
              RESTROOM SOLUTIONS
            </span>

          </div>


        </div>

      </div>


    </header>
  );
};


export default Navbar;