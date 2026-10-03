import React from "react";
import "./OurClients.css";

import client01 from "../../assets/clients/client01.png";
import client02 from "../../assets/clients/client02.png";
import client03 from "../../assets/clients/client03.png";
import client04 from "../../assets/clients/client04.png";
import client05 from "../../assets/clients/client05.png";
import client06 from "../../assets/clients/client06.png";
import client07 from "../../assets/clients/client07.png";
import client08 from "../../assets/clients/client08.png";
import client09 from "../../assets/clients/client09.jpg";
import client10 from "../../assets/clients/client10.jpg";
import client11 from "../../assets/clients/client11.png";
import client12 from "../../assets/clients/client12.png";
import client13 from "../../assets/clients/client13.png";
import client14 from "../../assets/clients/client14.png";
import client15 from "../../assets/clients/client15.png";
import client16 from "../../assets/clients/client16.png";
import client17 from "../../assets/clients/client17.png";
import client18 from "../../assets/clients/client18.png";
import client19 from "../../assets/clients/client19.png";
import client20 from "../../assets/clients/client20.png";
import client21 from "../../assets/clients/client21.png";
import client22 from "../../assets/clients/client22.png";
import client23 from "../../assets/clients/client23.png";
import client24 from "../../assets/clients/client24.png";
import client25 from "../../assets/clients/client25.png";
import client26 from "../../assets/clients/client26.png";
import client27 from "../../assets/clients/client27.png";
import client28 from "../../assets/clients/client28.png";
import client29 from "../../assets/clients/client29.png";
import client30 from "../../assets/clients/client30.png";
import client31 from "../../assets/clients/client31.jpg";
import client32 from "../../assets/clients/client32.png";


const clients = [
  client01,
  client02,
  client03,
  client04,
  client05,
  client06,
  client07,
  client08,
  client09,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16,
  client17,
  client18,
  client19,
  client20,
  client21,
  client22,
  client23,
  client24,
  client25,
  client26,
  client27,
  client28,
  client29,
  client30,
  client31,
  client32,
];


const trustPoints = [
  {
    number: "01",
    title: "Quality Materials",
    text: "Durable materials selected to deliver reliable performance and long-term value.",
  },
  {
    number: "02",
    title: "Reliable Solutions",
    text: "Practical restroom solutions designed around different spaces and usage requirements.",
  },
  {
    number: "03",
    title: "Professional Execution",
    text: "Careful planning, precise installation and attention to every project requirement.",
  },
  {
    number: "04",
    title: "Client-Focused Service",
    text: "We work closely with clients to understand their needs and deliver suitable solutions.",
  },
];


function OurClients() {
  return (
    <section className="our-clients">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="clients-orb clients-orb-one"></div>
      <div className="clients-orb clients-orb-two"></div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="clients-hero">

        <span className="clients-eyebrow">
          OUR CLIENTS
        </span>

        <h1>
          Trusted by <em>Leading</em> Organizations
        </h1>

        <p>
          Trusted partnerships built through quality,
          reliability and precision.
        </p>

      </div>


      {/* =====================================================
          TRUST STATS
      ===================================================== */}

      <div className="clients-stats">

        <div className="client-stat">
          <strong>32+</strong>
          <span>Clients</span>
        </div>

        <div className="client-stat">
          <strong>Multiple</strong>
          <span>Industries</span>
        </div>

        <div className="client-stat">
          <strong>Pan-India</strong>
          <span>Project Reach</span>
        </div>

        <div className="client-stat">
          <strong>Quality</strong>
          <span>Focused</span>
        </div>

      </div>


      {/* =====================================================
          CLIENT LOGOS
      ===================================================== */}

      <section className="clients-logo-section">

        <div className="section-heading">

          <span className="section-eyebrow">
            OUR PARTNERSHIPS
          </span>

          <h2>
            Organizations That <em>Trust VSK</em>
          </h2>

          <p>
            Our growing client network reflects our commitment
            to quality products, reliable execution and
            professional service.
          </p>

        </div>


        <div className="clients-grid">

          {clients.map((logo, index) => (

            <div
              className="client-box"
              key={index}
              style={{
                animationDelay: `${index * 0.04}s`,
              }}
            >

              <div className="client-box-inner">

                <img
                  src={logo}
                  alt={`VSK Client ${index + 1}`}
                />

              </div>

              <div className="client-corner top-left"></div>

              <div className="client-corner bottom-right"></div>

              <div className="client-shine"></div>

            </div>

          ))}

        </div>


        <div className="client-count">

          <span>32+</span>

          <p>
            Organizations &nbsp;•&nbsp;
            Institutions &nbsp;•&nbsp;
            Commercial Spaces
          </p>

        </div>

      </section>


      {/* =====================================================
          WHY VSK
      ===================================================== */}

      <section className="why-vsk-section">

        <div className="why-vsk-heading">

          <span className="section-eyebrow">
            WHY VSK IS TRUSTED
          </span>

          <h2>
            Built on Quality.
            <br />
            <em>Trusted Through Results.</em>
          </h2>

          <p>
            In just one year, VSK Enterprises has built
            strong client relationships by focusing on
            quality products, reliable execution and
            professional service.
          </p>

        </div>


        <div className="trust-grid">

          {trustPoints.map((item, index) => (

            <div
              className="trust-card"
              key={index}
            >

              <span className="trust-number">
                {item.number}
              </span>

              <div className="trust-icon">
                ✓
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          PARTNERSHIP CTA
      ===================================================== */}

      <section className="clients-cta">

        <div className="cta-glow cta-glow-one"></div>

        <div className="cta-glow cta-glow-two"></div>

        <div className="cta-content">

          <span className="section-eyebrow">
            READY TO PARTNER WITH VSK?
          </span>

          <h2>
            Let's Build a
            <br />
            <em>Strong Partnership.</em>
          </h2>

          <p>
            Whether you're planning a new project or looking
            for a reliable restroom solutions partner, let's
            work together to create the right solution for
            your space.
          </p>

          <a
            href="/contact"
            className="clients-cta-button"
          >
            Let's Work Together

            <span>
              →
            </span>

          </a>

        </div>

      </section>

    </section>
  );
}


export default OurClients;