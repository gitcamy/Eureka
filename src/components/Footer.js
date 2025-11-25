import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (event, sectionId) => {
    if (event) event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Information */}
        <div className="footer-section footer-company">
          <h3>Eureka Investments</h3>
          <p className="footer-description">
            Helping American buyers discover their dream properties in Spain.
          </p>
          <div className="footer-contact-info">
            <p>
              <strong>Address:</strong><br />
              Bilbao, Spain
            </p>
            {/* <p>
              <strong>Phone:</strong><br />
              <a href="tel:+34-XXX-XXX-XXX">+34 XXX XXX XXX</a>
            </p> */}
            {/* <p>
              <strong>Email:</strong><br />
              <a href="mailto:info@eurekarealestate.com">info@eurekarealestate.com</a>
            </p> */}
          </div>
          
          {/* Social Media Links */}
          <div className="footer-social">
            {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="social-icon">in</i>
            </a> */}
            <a href="https://www.instagram.com/eureka_invest/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">

 
            <i class="fa-brands fa-instagram"></i>            </a>
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="social-icon">fb</i>
            </a> */}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#about" onClick={(e) => scrollToSection(e, "about")}>About Us</a></li>
            <li><a href="#team" onClick={(e) => scrollToSection(e, "team")}>Our Team</a></li>
            <li><a href="#services" onClick={(e) => scrollToSection(e, "services")}>Services</a></li>
            <li><a href="#why" onClick={(e) => scrollToSection(e, "why")}>Why Eureka</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li>Buy Properties</li>
            <li>Sell Properties</li>
            <li>Renovate & Design</li>
            <li>Property Management</li>
            <li>Schedule Consultation</li>
          </ul>
        </div>

        {/* Quick Links */}
        {/* <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#resources">Free Resources</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
          </ul>
        </div> */}

        {/* Service Areas */}
        <div className="footer-section footer-locations">
          <h4>Service Areas</h4>
          <p className="footer-locations-intro">Serving American buyers in:</p>
          <p className="footer-locations-list">
            Madrid • Barcelona • Valencia • Málaga • San Sebastián • 
            Marbella • Balearic Islands • Bilbao • Seville • Granada • 
            Alicante • Costa del Sol
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        {/* <div className="footer-legal-links">
          <a href="#privacy-policy">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="#terms-of-service">Terms of Service</a>
          <span className="separator">|</span>
          <a href="#cookie-policy">Cookie Policy</a>
        </div> */}
        <p className="footer-copyright">
          &copy; {currentYear} Eureka Investments. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

