import "../assets/css/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1>Welcome to Jyoti Beauty Salon & Academy</h1>
          <p>
            Experience the art of beauty and wellness with our expert services
          </p>
          <div className="hero-buttons">
            <a href="/services" className="btn btn-services">
              Our Services
            </a>
            <a href="/contact" className="btn btn-book">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
