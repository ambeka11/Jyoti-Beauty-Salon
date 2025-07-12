import "../assets/css/About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Us</h2>
            <p>
              Jyoti Beauty Salon & Academy is a premier beauty destination
              located in Birtamod-2, Charpane, Jhapa. We are dedicated to
              providing top-quality beauty services and professional training in
              the art of cosmetology.
            </p>
            <p>
              Our team of skilled professionals is committed to helping you look
              and feel your best with personalized treatments tailored to your
              unique needs.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <h3>10+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="detail-item">
                <h3>50+</h3>
                <p>Happy Clients Daily</p>
              </div>
              <div className="detail-item">
                <h3>100+</h3>
                <p>Students Trained</p>
              </div>
            </div>
          </div>
          <div className="about-images">
            <div className="image-placeholder">
              <p>Owner's Photo</p>
            </div>
            <div className="certificates">
              <div className="certificate-placeholder">
                <p>PAN Card</p>
              </div>
              <div className="certificate-placeholder">
                <p>Legal Document</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
