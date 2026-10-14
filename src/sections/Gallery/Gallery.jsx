import React from "react";
import "./Gallery.css";

// VSK gallery images
import img1 from "../../assets/clients/gal6.png";
import img2 from "../../assets/clients/gallery2.png";

import img3 from "../../assets/clients/gal5.png";
import img4 from "../../assets/clients/gal7.png";
import img5 from "../../assets/clients/gallery1.png";
import img6 from "../../assets/clients/gal8.png";
import img7 from "../../assets/clients/gal9.png";
// import img8 from "../../assets/clients/g10.png";
import img9 from "../../assets/clients/g10.png";
import img10 from "../../assets/clients/gal4.jpeg";
// import img11 from "../../assets/applications/gyms.jpg";
import img12 from "../../assets/applications/gyms.jpg";
import img13 from "../../assets/applications/gyms.jpg";
import img14 from "../../assets/applications/gyms.jpg";
import img15 from "../../assets/applications/gyms.jpg";


const galleryImages = [
  img5,
  img6,
  img7,
  // img8,
  img9,
  img10,
  // img11,
//   img12,
//   img13,
//   img14,
//   img15,
];

const Gallery = () => {
  return (
    <>
      <section className="gallery-hero">

        {/* =========================================
            GALLERY INTRO
        ========================================= */}

        <div className="gallery-title">

          <span>VSK PROJECT GALLERY</span>

          <h2>
            Designed for
            <br />
            Modern Spaces
          </h2>

          <p>
            Explore VSK restroom cubicle solutions designed to combine
            durability, functionality and modern architectural aesthetics
            across a wide range of commercial and institutional spaces.
          </p>

        </div>


        {/* =========================================
            FEATURED PROJECT
        ========================================= */}

        <div className="gallery-feature">

          <div className="gallery-left">

            <img
              src={img1}
              alt="VSK Restroom Cubicle Installation"
            />

          </div>


          <div className="gallery-right">

            <div className="gallery-card">

              <span>PRECISION & PERFORMANCE</span>

              <h3>
                Built for
                <br />
                Better Spaces
              </h3>

            </div>


            <div className="gallery-small-grid">

              <img
                src={img2}
                alt="VSK Restroom Cubicle"
              />

              <img
                src={img3}
                alt="VSK Washroom Interior"
              />

              <img
                src={img4}
                alt="VSK Cubicle System"
              />

              <img
                src={img5}
                alt="VSK Restroom Installation"
              />

            </div>

          </div>

        </div>


        {/* =========================================
            ALL PROJECTS
        ========================================= */}

        <div className="gallery-memory-section">

          <div className="memory-heading">

            <span>OUR PROJECTS</span>

            <h2>
              Spaces Built
              <br />
              with Purpose
            </h2>

          </div>


          {/* =========================================
              IMAGE GRID
          ========================================= */}

          <div className="memory-grid">

            {galleryImages.map((image, index) => (

              <div
                className="memory-item"
                key={`vsk-gallery-${index}`}
              >

                <img
                  src={image}
                  alt={`VSK restroom cubicle project ${index + 1}`}
                  loading="lazy"
                />

                <div className="memory-overlay">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
};

export default Gallery;