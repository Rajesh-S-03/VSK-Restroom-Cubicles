import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Comparision_slider.css';

import beforeImage from '../../assets/applications/before.jpeg';
import afterImage from '../../assets/applications/after.jpeg';

const ComparisonSlider = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const positionRef = useRef(50);
  const velocityRef = useRef(0);
  const draggingRef = useRef(false);
  const pointerXRef = useRef(0);
  const lastInteractionRef = useRef(0);
  const directionRef = useRef(1);

  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = (value) => {
    const next = Math.max(0, Math.min(100, value));
    positionRef.current = next;
    setPosition(next);
  };

  const handlePointerDown = (event) => {
    draggingRef.current = true;
    setIsDragging(true);
    pointerXRef.current = event.clientX;
    velocityRef.current = 0;
    lastInteractionRef.current = performance.now();

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!draggingRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const deltaX = event.clientX - pointerXRef.current;

    const deltaPercent = (deltaX / rect.width) * 100;

    updatePosition(positionRef.current + deltaPercent);

    velocityRef.current = deltaPercent;
    pointerXRef.current = event.clientX;
    lastInteractionRef.current = performance.now();
  };

  const handlePointerUp = () => {
    draggingRef.current = false;
    setIsDragging(false);
    lastInteractionRef.current = performance.now();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      updatePosition(positionRef.current - 2);
      lastInteractionRef.current = performance.now();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      updatePosition(positionRef.current + 2);
      lastInteractionRef.current = performance.now();
    }

    if (event.key === 'Home') {
      updatePosition(0);
    }

    if (event.key === 'End') {
      updatePosition(100);
    }
  };

  useEffect(() => {
    let frameId;
    let previousTime = 0;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const animate = (time) => {
      if (!previousTime) previousTime = time;

      const delta = Math.min((time - previousTime) / 16.67, 2);
      previousTime = time;

      const idleTime = time - lastInteractionRef.current;

      if (!draggingRef.current) {
        // Momentum after the user releases the divider
        if (Math.abs(velocityRef.current) > 0.015) {
          const next = positionRef.current + velocityRef.current * delta;

          updatePosition(next);
          velocityRef.current *= Math.pow(0.91, delta);

          if (next <= 0 || next >= 100) {
            velocityRef.current = 0;
          }
        } else {
          velocityRef.current = 0;

          // Gentle autoplay resumes after user interaction
          if (!reducedMotion && idleTime > 1800) {
            const next =
              positionRef.current + directionRef.current * 0.09 * delta;

            if (next >= 75) directionRef.current = -1;
            if (next <= 25) directionRef.current = 1;

            updatePosition(Math.max(25, Math.min(75, next)));
          }
        }
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="comparison-section">
      <div className="comparison-inner">

        {/* HEADING */}

        <div className="comparison-heading">
          <span className="comparison-eyebrow">
            TRANSFORMATION SHOWCASE
          </span>

          <h2>
            See the <span>Difference.</span>
          </h2>

          <p>
            Compare the space before and after our
            precision-engineered installation solutions.
          </p>
        </div>

        {/* COMPARISON FRAME */}

        <div
          ref={containerRef}
          className={`comparison-frame ${isDragging ? 'is-dragging' : ''}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onLostPointerCapture={handlePointerUp}
        >
          {/* BEFORE image */}
          <img
            src={beforeImage}
            alt="Restroom before installation"
            className="comparison-image comparison-before"
            draggable="false"
          />

          {/* AFTER image, revealed by clipping */}
          <div
            className="comparison-after-layer"
            style={{ clipPath: `inset(0 0 0 ${position}%)` }}
          >
            <img
              src={afterImage}
              alt="Restroom after installation"
              className="comparison-image comparison-after"
              draggable="false"
            />
          </div>

          <span className="comparison-label label-before">BEFORE</span>

          <span className="comparison-label label-after">AFTER</span>

          {/* Draggable divider */}
          <div
            className="comparison-divider"
            style={{ left: `${position}%` }}
          >
            <button
              type="button"
              className="comparison-handle"
              role="slider"
              aria-label="Before and after image comparison"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(100 - position)}
              aria-valuetext={`After image visible from ${Math.round(
                100 - position
              )} percent`}
              onKeyDown={handleKeyDown}
              onPointerDown={(event) => {
                event.stopPropagation();
                handlePointerDown(event);
              }}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              <span>‹</span>
              <span>›</span>
            </button>
          </div>
        </div>

        {/* FOOTER INSTRUCTION */}

        <div className="comparison-footer">
          <span className="comparison-footer-line" />
          <span>DRAG TO COMPARE</span>
          <span className="comparison-footer-line" />
        </div>

        {/* EXPLORE MORE CTA (outside the footer row) */}

        <div className="comparison-cta">
          <Link to="/restroom-cubicles" className="comparison-explore-btn">
            <span onClick={() => navigate("/restroom-cubicles")}>Explore More</span>
            <span className="cta-arrow">↗</span>
          </Link>

          <p>Discover our complete range of solutions</p>
        </div>

      </div>
    </section>
  );
};

export default ComparisonSlider;
