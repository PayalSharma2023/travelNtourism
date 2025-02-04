import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          Roamers
        </Link>
        <div
          className="mobile-menu-button"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            console.log("Mobile Menu Open:", !isMobileMenuOpen); // Debug log
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/destinations"
            className={location.pathname === "/destinations" ? "active" : ""}
          >
            Destinations
          </Link>
          <Link
            to="/offers"
            className={location.pathname === "/offers" ? "active" : ""}
          >
            Offers
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
