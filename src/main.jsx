import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./assets/css/main.css";

// Scroll animation functions
const setupScrollAnimations = () => {
  // Header scroll effect
  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // Intersection Observer for scroll animations
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".service-card, .gallery-item, .info-item"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });
  };

  document.addEventListener("DOMContentLoaded", animateOnScroll);
};

// Call the setup function after React renders
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

setupScrollAnimations();
