import React from "react";
import "../assets/css/Gallery.css";

const galleryItems = [
  {
    id: 1,
    title: "Bridal Suite",
    category: "Luxury Makeovers",
    // image: "/images/gallery/bridal-suite.jpg",
    facility: "Premium bridal preparation area",
  },
  {
    id: 2,
    title: "Hair Station",
    category: "Styling Services",
    // image: "/images/gallery/hair-station.jpg",
    facility: "Professional styling chairs",
  },
  {
    id: 3,
    title: "Spa Room",
    category: "Relaxation",
    // image: "/images/gallery/spa-room.jpg",
    facility: "Aromatherapy treatment area",
  },
  {
    id: 4,
    title: "Nail Bar",
    category: "Nail Services",
    // image: "/images/gallery/nail-bar.jpg",
    facility: "Sanitized manicure stations",
  },
  {
    id: 5,
    title: "Facial Room",
    category: "Skin Care",
    // image: "/images/gallery/facial-room.jpg",
    facility: "Advanced skincare equipment",
  },
  {
    id: 6,
    title: "Training Academy",
    category: "Education",
    // image: "/images/gallery/academy.jpg",
    facility: "Professional beauty courses",
  },
];

const Gallery = () => {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <h2 className="section-title">Our Salon Facilities</h2>
          <p className="section-subtitle">
            Explore our premium beauty spaces designed for your comfort
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div className="gallery-card" key={item.id}>
              <div className="gallery-image-container">
                <img
                  src={item.image}
                  alt={`${item.title} at Jyoti Beauty Salon`}
                  className="gallery-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/placeholder.jpg";
                  }}
                />
                <div className="gallery-overlay">
                  <div className="gallery-content">
                    <h3>{item.title}</h3>
                    <div className="gallery-meta">
                      <span className="category">{item.category}</span>
                      <span className="facility">{item.facility}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
