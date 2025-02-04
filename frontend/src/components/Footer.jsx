import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We make your travel dreams come true with expertly planned trips and
            exceptional service.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/destinations">Destinations</Link>
            </li>
            <li>
              <Link to="/offers">Special Offers</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: info@roamers.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Travel Street</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
