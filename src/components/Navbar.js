import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = ({ scrollToContact }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY < 10) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");

    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  }

  function scrollToSection(event, sectionId) {
    if (event) event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    toggleMenu();
  }

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="nav-brand">
        <Link to="/">
          <h2>Eureka Investments</h2>
        </Link>
        <span>Find your golden property in Spain</span>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="nav-links">
        <button className="close-menu" onClick={toggleMenu} aria-label="Close menu">
          ×
        </button>
        <a href="#hero" className="nav-button" onClick={(e) => scrollToSection(e, "hero")}>
          <motion.span whileHover={{ scale: 1.1 }}>Home</motion.span>
        </a>
        <a href="#about" className="nav-button" onClick={(e) => scrollToSection(e, "about")}>
          <motion.span whileHover={{ scale: 1.1 }}>About</motion.span>
        </a>
        <a href="#services" className="nav-button" onClick={(e) => scrollToSection(e, "services")}>
          <motion.span whileHover={{ scale: 1.1 }}>Services</motion.span>
        </a>
        <a href="#why" className="nav-button" onClick={(e) => scrollToSection(e, "why")}>
          <motion.span whileHover={{ scale: 1.1 }}>Why Us</motion.span>
        </a>
        <a href="#contact" className="nav-button" onClick={(e) => scrollToSection(e, "contact")}>
          <motion.span whileHover={{ scale: 1.1 }}>Contact</motion.span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
