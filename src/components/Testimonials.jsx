import { useState } from "react";
import "../assets/css/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anjali Sharma",
      role: "Regular Client",
      content:
        "Jyoti Beauty Salon has transformed my look completely! Their hair coloring technique is the best in town.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Bridal Client",
      content:
        "For my wedding, the team did an amazing job with my makeup and hair. I felt like a princess all day!",
      rating: 5,
    },
    {
      name: "Riya Khadka",
      role: "Student",
      content:
        "The beauty courses here are comprehensive and practical. I started my own salon after completing their course.",
      rating: 4,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-container">
          <button className="nav-button prev" onClick={prevTestimonial}>
            ‹
          </button>
          <div className="testimonial-card">
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < testimonials[currentTestimonial].rating ? "filled" : ""
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <p className="testimonial-content">
              "{testimonials[currentTestimonial].content}"
            </p>
            <div className="client-info">
              <h4>{testimonials[currentTestimonial].name}</h4>
              <p>{testimonials[currentTestimonial].role}</p>
            </div>
          </div>
          <button className="nav-button next" onClick={nextTestimonial}>
            ›
          </button>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={index === currentTestimonial ? "active" : ""}
              onClick={() => setCurrentTestimonial(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
