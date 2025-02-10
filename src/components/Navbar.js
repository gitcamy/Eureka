import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");

    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active"); // Toggle active class on hamburger
  }

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">
          <h2>Eureka</h2>
        </Link>
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
        <Link to="/about">
          <motion.span whileHover={{ scale: 1.1 }}>about</motion.span>
        </Link>
        <Link to="/contact">
          <motion.span whileHover={{ scale: 1.1 }}>contact</motion.span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
