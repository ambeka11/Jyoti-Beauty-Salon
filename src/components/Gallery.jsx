import "../assets/css/Gallery.css";

const Gallery = () => {
  // Placeholder for gallery images - replace with actual images when received
  const galleryItems = Array(6)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      title: `Service ${index + 1}`,
      category: index % 2 === 0 ? "Hair" : "Makeup",
    }));

  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="section-title">Our Gallery</h2>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div className="gallery-item" key={item.id}>
              <div className="image-placeholder">
                <p>Image {item.id}</p>
              </div>
              <div className="gallery-info">
                <h3>{item.title}</h3>
                <span>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
