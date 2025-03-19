import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { useEffect, useState, useCallback } from "react";
import "./Navbar.css";

const Navbar = ({ scrollToContact }) => {
  // const [isVisible, setIsVisible] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // const handleScroll = useCallback(() => {
  //   if (typeof window !== "undefined") {
  //     if (window.scrollY > lastScrollY) {
  //       setIsVisible(false);
  //     } else {
  //       setIsVisible(true);
  //     }
  //     setLastScrollY(window.scrollY);
  //   }
  // }, [lastScrollY]); // Add lastScrollY as a dependency

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [handleScroll]); // Include handleScroll in the dependency array

  function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");

    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  }

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">
          <h1>Eureka</h1>
        </Link>
        <span>find your golden property in Northern Spain</span>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="nav-links">
        <Link to="/">
          <motion.span whileHover={{ scale: 1.1 }}>home</motion.span>
        </Link>
        {/* <Link to="/about">
          <motion.span whileHover={{ scale: 1.1 }}>about</motion.span>
        </Link> */}
        <button className="nav-button" onClick={scrollToContact}>
          <motion.span whileHover={{ scale: 1.1 }}>contact</motion.span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
