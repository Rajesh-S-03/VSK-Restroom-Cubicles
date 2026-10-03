import './Hero.css';
import heroImg from '../../assets/heroimg.png';

const Hero = () => {
  return (
    <section className="hero">

      {/* Background Image */}
      <img
        src={heroImg}
        alt="VSK Restroom Cubicles"
        className="hero-image"
      />

      {/* Cinematic Gradient */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">

        <span className="hero-label">
          VSK ENTERPRISES
        </span>

        <h1 className="hero-title">
          Engineered Spaces
          <br />
          <span>Built for Performance</span>
        </h1>

        <p className="hero-subtitle">
          Premium restroom cubicle systems
          <br />
          for modern commercial spaces.
        </p>

        <div className="hero-line"></div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-arrow">↓</span>
        </div>

      </div>

    </section>
  );
};

export default Hero;