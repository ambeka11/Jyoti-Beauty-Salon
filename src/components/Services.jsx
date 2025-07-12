import "../assets/css/Services.css";

const Services = () => {
  const services = [
    {
      title: "Hair Services",
      description:
        "Cut, color, styling, treatments, and more for all hair types.",
      icon: "✂️",
    },
    {
      title: "Skin Care",
      description: "Facials, peels, and treatments for glowing, healthy skin.",
      icon: "🌸",
    },
    {
      title: "Makeup",
      description:
        "Professional makeup for all occasions, from natural to glam.",
      icon: "💄",
    },
    {
      title: "Nail Care",
      description: "Manicures, pedicures, and nail art to complete your look.",
      icon: "💅",
    },
    {
      title: "Waxing",
      description: "Professional waxing services for smooth, hair-free skin.",
      icon: "🧴",
    },
    {
      title: "Beauty Courses",
      description:
        "Professional training in all aspects of beauty and cosmetology.",
      icon: "🎓",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
