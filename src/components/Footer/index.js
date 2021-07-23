import React from "react";
import "./Footer.css";
import Logo from "./Main Logo-01.png";
import Title from "./Title_Dark-01.png";
export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-contact-card">
        <div className="footer-images">
          <img className="footer-logo" src={Logo} alt="logo1" />
          <img className="footer-title" src={Title} alt="title" />
        </div>
        <p>
          Follow us on social media and stay up to date with all our fruitful
          buisness solutions
        </p>
        <div className="footer-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram-square"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
      <div className="footer-list">
        <h3>About us</h3>
        <a href="/">We're Hiring</a>
        <a href="/">Our Customers</a>
        <a href="/">Blog Post</a>
        <a href="/">Help & support</a>
      </div>
      <div className="footer-list">
        <h3>Community</h3>
        <a href="/">About us</a>
        <a href="/">Our Clients</a>
        <a href="/">Legal Notice</a>
      </div>
      <div className="footer-list">
        <h3>Contact</h3>
        <a href="/">
          {" "}
          <i className="fas fa-phone"></i> +123 456 789
        </a>
        <a href="/">
          {" "}
          <i className="fas fa-mail-bulk"></i> Contact us
        </a>
      </div>
    </div>
  );
}
