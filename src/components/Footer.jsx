import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>Jyoti Beauty Salon & Academy</h3>
            <p>Your destination for beauty and wellness in Birtamod, Jhapa.</p>
            <div className="socials">
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
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> Birtamod-2, Charpane,
              Jhapa
            </p>
            <p>
              <i className="fas fa-phone"></i> 9801364877
            </p>
            <p>
              <i className="fas fa-envelope"></i> Jyotisalonacademy@gmail.com
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Jyoti Beauty Salon & Academy. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
