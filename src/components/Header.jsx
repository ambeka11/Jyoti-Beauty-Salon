import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

const Header = () => {
  useEffect(() => {
    const mobileMenuBtn = document.querySelector(".mobile-menu");
    const nav = document.querySelector(".nav");

    if (mobileMenuBtn && nav) {
      mobileMenuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
        mobileMenuBtn.classList.toggle("active");
      });
    }
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/images/logo.png" alt="Jyoti Beauty Salon & Academy" />
            <span className="logo-text">Jyoti Beauty Salon & Academy</span>
          </Link>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
