import "../assets/css/About.css";
import pancard from "../../public/images/pancard.jpg";
import legalcard from "../../public/images/legalcard.jpg";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const aboutSection = document.querySelector(".about-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.querySelector(".about-text").classList.add("animate");
            document.querySelector(".about-images").classList.add("animate");
            document.querySelectorAll(".detail-item").forEach((item) => {
              item.classList.add("animate");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutSection) {
      observer.observe(aboutSection);
    }
  }, []);
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
            {/* <div className="image-placeholder">
              <p>Owner's Photo</p>
            </div> */}
            <div className="certificates">
              <div className="certificate-placeholder">
                <img src={pancard} alt="pan card" />
              </div>
              <div className="certificate-placeholder">
                <img src={legalcard} alt="legal document" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
