import { useEffect } from "react";
import "../assets/css/Services.css";
import hairServiceImg from "../../public/images/hair.jpg";
import skinServiceImg from "../../public/images/skin.jpg";
import makeupServiceImg from "../../public/images/makeup.jpg";
import nailsServiceImg from "../../public/images/nails.jpg";
import waxingServiceImg from "../../public/images/waxing.jpg";
import coursesServiceImg from "../../public/images/courses.jpg";

const Services = () => {
  const services = [
    {
      title: "Hair Services",
      description:
        "Cut, color, styling, treatments, and more for all hair types.",
      image: hairServiceImg,
    },
    {
      title: "Skin Care",
      description: "Facials, peels, and treatments for glowing, healthy skin.",
      image: skinServiceImg,
    },
    {
      title: "Makeup",
      description:
        "Professional makeup for all occasions, from natural to glam.",
      image: makeupServiceImg,
    },
    {
      title: "Nail Care",
      description: "Manicures, pedicures, and nail art to complete your look.",
      image: nailsServiceImg,
    },
    {
      title: "Waxing",
      description: "Professional waxing services for smooth, hair-free skin.",
      image: waxingServiceImg,
    },
    {
      title: "Beauty Courses",
      description:
        "Professional training in all aspects of beauty and cosmetology.",
      image: coursesServiceImg,
    },
  ];

  useEffect(() => {
    const serviceSection = document.querySelector(".services-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document
              .querySelectorAll(".service-card")
              .forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add("animate");
                }, index * 100);
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (serviceSection) {
      observer.observe(serviceSection);
    }
  }, []);

  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Premium beauty treatments tailored to your needs
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <div className="service-image-container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <div className="service-description">
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
