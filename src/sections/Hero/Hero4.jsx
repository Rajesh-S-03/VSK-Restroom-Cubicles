import { useEffect, useRef, useState } from 'react';
import './Hero4.css';

const features = [
  { icon: '✦', title: 'Maintenance-free', text: 'Built to perform for years with zero upkeep.' },
  { icon: '⚗', title: 'Chemical resistant', text: 'Unaffected by harsh cleaning agents.' },
  { icon: '✧', title: 'Hygienic & easy to clean', text: 'Smooth, non-porous surfaces that stay fresh.' },
  { icon: '💧', title: 'Water & moisture resistant', text: 'No swelling or damage in wet areas.' },
  { icon: '⛨', title: 'Impact, scratch & wear resistant', text: 'Tough panels for high-traffic spaces.' },
  { icon: '🔥', title: 'Fire & cigarette burn resistant', text: 'Safer surfaces that resist burn marks.' },
];

const Hero4 = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`hero4 ${visible ? 'is-visible' : ''}`}
    >
      <div className="hero4-head">
        <p className="hero4-label">PERFORMANCE FEATURES</p>
        <h2 className="hero4-title">
          Built to <span className="hero4-accent">Last</span>
        </h2>
      </div>

      <div className="hero4-grid">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="hero4-card"
            style={{ '--delay': `${i * 0.1}s` }}
          >
            <span className="hero4-icon">{f.icon}</span>
            <h3 className="hero4-card-title">{f.title}</h3>
            <p className="hero4-card-text">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero4;
