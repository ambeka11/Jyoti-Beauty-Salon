import "../assets/css/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              Have questions or want to book an appointment? Reach out to us!
            </p>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Address</h4>
                <p>Birtamod-2, Charpane, Jhapa</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>9801364877</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>Jyotisalonacademy@gmail.com</p>
              </div>
            </div>
            <div className="social-links">
              <a
                href="https://www.facebook.com/share/15qvsPJAtC/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/jyotibeautysalonandacademy?igsh=MW40dGhqZmdweGQ2aQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.tiktok.com/@jyotibeautysalon2081?_t=ZS-8xpbE2RyVrm&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Your Phone" />
            </div>
            <div className="form-group">
              <select required>
                <option value="">Select Service</option>
                <option value="hair">Hair Services</option>
                <option value="skin">Skin Care</option>
                <option value="makeup">Makeup</option>
                <option value="nails">Nail Care</option>
                <option value="waxing">Waxing</option>
                <option value="courses">Beauty Courses</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
