
import React from 'react';
import './Founder.css';

import foundersImg from '../../assets/applications/founder_vsk.jpeg';

const FounderSection = () => {
  return (
    <section className="vsk-founder-section">

      {/* Heading */}
      <div className="vsk-founder-heading">
        <span>THE PEOPLE BEHIND VSK</span>
        <h2>
          Built on Trust.
          <span> Driven by Quality.</span>
        </h2>
        <p>
          The vision and commitment behind our
          interior and infrastructure solutions.
        </p>
      </div>

      {/* Content */}
      <div className="vsk-founder-content">

        {/* Quote */}
        <div className="vsk-founder-quote">

          <span className="vsk-quote-mark">“</span>

          <p>
            Every space deserves
            <br />
            thoughtful design,
            <br />
            dependable quality,
            <br />
            and lasting performance.
          </p>

          <span className="vsk-quote-mark vsk-quote-bottom">
            ”
          </span>

          <div className="vsk-founder-signature">
            <span className="vsk-signature-line"></span>
            <div>
              <strong>VSK Enterprises</strong>
              <small>Our Commitment, Our Promise</small>
            </div>
          </div>

        </div>

        {/* Founder Image */}
        <div className="vsk-founder-image">
          <div className="vsk-founder-image-frame">
            <img
              src={foundersImg}
              alt="VSK Enterprises founder"
            />
          </div>

<div className="vsk-founder-image-caption">
  <span className="vsk-caption-dot"></span>

  <div className="vsk-founder-name">
    <strong>Mr. VarunaPandi VN</strong>

    <span className="vsk-founder-tagline">
      VISION <i>•</i> QUALITY <i>•</i> TRUST
    </span>

    <a
      href="https://varunapandi-vn-portfolio.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="vsk-founder-link"
    >
      About Founder
      <span className="vsk-founder-arrow">↗</span>
    </a>
  </div>
</div>
        </div>

      </div>

    </section>
  );
};

export default FounderSection;