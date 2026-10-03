import React, { useState, useEffect } from 'react';
import './Hero5.css';

const productsData = [
  {
    id: 1,
    title: 'Restroom Cubicles',
    subtitle: 'PREMIUM WASHROOM SYSTEMS',
    description: 'High-durability moisture-resistant cubicle partitions engineered for commercial and modern public spaces.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000',
    link: '/restroom-cubicles',
  },
  {
    id: 2,
    title: 'Locker Systems',
    subtitle: 'SECURE & MODULAR STORAGE',
    description: 'Heavy-duty modular compact laminate lockers designed for corporate offices, fitness centers, and schools.',
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=1000',
    link: '/lockers',
  },
  {
    id: 3,
    title: 'Urinal Partitions',
    subtitle: 'HYGIENIC & MODERN DESIGN',
    description: 'Sleek wall-hung dividers providing privacy and a clean aesthetic for high-traffic corporate washrooms.',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=1000',
    link: '/urinal-partitions',
  },
  {
    id: 4,
    title: 'HPL Cladding',
    subtitle: 'EXTERIOR & INTERIOR PANELS',
    description: 'Weather-resistant decorative panel systems providing long-lasting durability and high thermal resistance.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    link: '/hpl-cladding',
  },
];

const Hero5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % productsData.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? productsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % productsData.length);
  };

  const handleNavigate = (link) => {
    window.location.href = link;
  };

  return (
    <section className="hero5-section">
      <div className="hero5-header">
        <span className="hero5-tagline">OUR PRODUCT RANGE</span>
        <h2 className="hero5-heading">Engineered for Excellence</h2>
      </div>

      <div className="hero5-carousel-wrapper">
        {/* Navigation Arrows */}
        <button 
          className="hero5-arrow hero5-arrow-left" 
          onClick={handlePrev} 
          aria-label="Previous Slide"
        >
          &#10094;
        </button>

        {/* 3D Coverflow Container */}
        <div className="hero5-cards-container">
          {productsData.map((item, index) => {
            let positionClass = 'hero5-card-hidden';
            const total = productsData.length;

            if (index === activeIndex) {
              positionClass = 'hero5-card-center';
            } else if (index === (activeIndex - 1 + total) % total) {
              positionClass = 'hero5-card-left';
            } else if (index === (activeIndex + 1) % total) {
              positionClass = 'hero5-card-right';
            }

            return (
              <div
                key={item.id}
                className={`hero5-card ${positionClass}`}
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className="hero5-card-bg"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="hero5-card-overlay" />
                </div>

                <div className="hero5-card-content">
                  <span className="hero5-card-subtitle">{item.subtitle}</span>
                  <h3 className="hero5-card-title">{item.title}</h3>
                  <p className="hero5-card-description">{item.description}</p>

                  <button
                    className="hero5-card-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigate(item.link);
                    }}
                  >
                    View More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button 
          className="hero5-arrow hero5-arrow-right" 
          onClick={handleNext} 
          aria-label="Next Slide"
        >
          &#10095;
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="hero5-dots">
        {productsData.map((_, idx) => (
          <button
            key={idx}
            className={`hero5-dot ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero5;