import './Footer.css';
import vskLogo from '../assets/vsklogo.png';
import secondLogo from '../assets/clients/V Space.png'
import thirdLogo from '../assets/clients/STYLAM.png'

const Footer = () => {
  return (
    <footer className="footer-section">

      {/* Decorative top shape */}
      <div className="footer-top-shape">
        <span className="shape-green"></span>
      </div>

      <div className="footer-container">

        {/* =========================
            TOP ROW
        ========================== */}
        <div className="footer-grid">

          {/* =========================
              COLUMN 1 - BRAND
          ========================== */}
<div className="footer-col footer-brand">

  <div className="footer-logos">
    <img
      src={vskLogo}
      alt="VSK Enterprises"
      className="footer-logo"
    />

    <span className="footer-logo-divider"></span>

    <img
      src={secondLogo}
      alt="Partner Logo"
      className="footer-logo footer-logo-secondary"
    />
    <span className="footer-logo-divider"></span>
    <img
      src={thirdLogo}
      alt="STYLAM"
      className="footer-logo footer-logo-tertiary"
    />
  </div>

  <div className="brand-line"></div>

  <p className="footer-about">
    Premium restroom cubicle systems engineered
    for modern commercial spaces.
  </p>

</div>


          {/* =========================
              COLUMN 2 - COMPANY
          ========================== */}
          <div className="footer-col">

            <h4 className="footer-title">
              Company
            </h4>

            <div className="title-line"></div>

            <ul className="footer-links">

              <li>
                <a href="#home">
                  <span>›</span>
                  Home
                </a>
              </li>

              <li>
                <a href="#about">
                  <span>›</span>
                  About Us
                </a>
              </li>

              <li>
                <a href="#products">
                  <span>›</span>
                  Products
                </a>
              </li>

              <li>
                <a href="#contact">
                  <span>›</span>
                  Contact Us
                </a>
              </li>

            </ul>

          </div>


          {/* =========================
              COLUMN 3 - SOLUTIONS
          ========================== */}
          <div className="footer-col">

            <h4 className="footer-title">
              Solutions
            </h4>

            <div className="title-line"></div>

            <ul className="footer-links">

              <li>
                <a href="/restroom-cubicles">
                  <span>›</span>
                  Restroom Cubicles
                </a>
              </li>

              <li>
                <a href="/restroom-cubicles">
                  <span>›</span>
                  Locker Systems
                </a>
              </li>

              <li>
                <a href="/restroom-cubicles">
                  <span>›</span>
                  Urinal Partitions
                </a>
              </li>

              <li>
                <a href="/restroom-cubicles">
                  <span>›</span>
                  HPL Exterior Cladding
                </a>
              </li>

            </ul>

          </div>


          {/* =========================
              COLUMN 4 - CONTACT
          ========================== */}
          <div className="footer-col footer-contact">

            <h4 className="footer-title">
              Get In Touch
            </h4>

            <div className="title-line"></div>


            {/* ADDRESS */}
            <div className="contact-item">

              <span className="contact-icon">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
                  <circle
                    cx="12"
                    cy="9.5"
                    r="2.4"
                  />
                </svg>

              </span>

              <p>
                1134/1A1B, Malayambakkam (South),
                Kanchipuram,
                Chennai - 600069
              </p>

            </div>


            {/* PHONE */}
            <div className="contact-item">

              <span className="contact-icon">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4 5c0 8.3 6.7 15 15 15l3-3.4-5.4-2.6-1.6 2a12.6 12.6 0 0 1-6-6l2-1.6L8.4 3 5 5Z" />
                </svg>

              </span>

              <p>

                <a href="tel:+919791128296">
                  +91-97911 28296
                </a>

                <br />

                <a href="tel:+917305128296">
                  +91-73051 28296
                </a>

              </p>

            </div>


            {/* EMAIL */}
            <div className="contact-item">

              <span className="contact-icon">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />

                  <path d="m3.5 6 8.5 7 8.5-7" />

                </svg>

              </span>

              <p>
                <a href="mailto:varun@vskenterprises.in">
                  varun@vskenterprises.in
                </a>
              </p>

            </div>


            {/* =========================
                SOCIAL MEDIA
            ========================== */}
            <div className="footer-social-wrapper">

              <span className="follow-text">
                Follow Us On
              </span>

              <div className="footer-socials">

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/919791128296"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.5 11.7a8.4 8.4 0 0 1-12.7 7.2L3.5 20l1.2-4.2A8.5 8.5 0 1 1 20.5 11.7Z" />

                    <path d="M8.5 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c.7 1.3 1.7 2.3 3 3l.6-.5c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1 .5-1.5.5-1.2 0-2.8-.7-4.2-1.9-1.3-1.1-2.4-2.4-3-3.7-.5-1.1-.5-2-.1-2.7Z" />
                  </svg>

                </a>


                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/vsk_vspace_official/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >

                    <rect
                      x="3.5"
                      y="3.5"
                      width="17"
                      height="17"
                      rx="5"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4.2"
                    />

                    <circle
                      cx="17.2"
                      cy="6.8"
                      r="1.1"
                      fill="currentColor"
                      stroke="none"
                    />

                  </svg>

                </a>


                {/* FACEBOOK */}
                <a
                  href="https://www.facebook.com/profile.php?id=61592922280284"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >

                    <path d="M14 9h3V5.5h-3C11.8 5.5 10 7.3 10 9.5V12H8v3.5h2V22h3.5v-6.5H16l.5-3.5h-3v-2c0-.6.4-1 1-1Z" />

                  </svg>

                </a>

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            QUOTE
        ========================== */}
        <div className="footer-quote">

          <span></span>

          <p>
            “Clean restrooms reflect responsible citizens
            and a healthy society”
          </p>

          <span></span>

        </div>


        {/* =========================
            BOTTOM BAR
        ========================== */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} VSK Enterprises.
            All Rights Reserved.
          </p>

          <div className="footer-bottom-links">

            <a href="/privacy-policy">
              Privacy Policy
            </a>

            <span>•</span>

            <a href="/terms-of-service">
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;