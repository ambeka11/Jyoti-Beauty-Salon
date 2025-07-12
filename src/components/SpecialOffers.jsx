import "../assets/css/SpecialOffers.css";

const SpecialOffers = () => {
  const offers = [
    {
      title: "Bridal Package",
      description:
        "Complete bridal makeover including hair, makeup, and mehndi",
      price: "₹15,000",
      originalPrice: "₹20,000",
      tag: "Popular",
    },
    {
      title: "Spa Day",
      description:
        "Full day relaxation with facial, massage, and manicure/pedicure",
      price: "₹5,000",
      originalPrice: "₹7,500",
      tag: "Limited Time",
    },
    {
      title: "Student Discount",
      description: "20% off all services with valid student ID",
      price: "20% OFF",
      originalPrice: "",
      tag: "Exclusive",
    },
  ];

  return (
    <section className="special-offers">
      <div className="container">
        <h2 className="section-title">Special Offers</h2>
        <p className="section-subtitle">
          Take advantage of our current promotions and save on your beauty
          treatments
        </p>
        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div className="offer-card" key={index}>
              {offer.tag && <span className="offer-tag">{offer.tag}</span>}
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <div className="price-container">
                <span className="current-price">{offer.price}</span>
                {offer.originalPrice && (
                  <span className="original-price">{offer.originalPrice}</span>
                )}
              </div>
              <button className="btn">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
