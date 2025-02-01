import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">ModernApp</Link>
      </div>
      <div className="nav-links">
        <Link to="/">
          <motion.span whileHover={{ scale: 1.1 }}>Home</motion.span>
        </Link>
        <Link to="/about">
          <motion.span whileHover={{ scale: 1.1 }}>About</motion.span>
        </Link>
        <Link to="/contact">
          <motion.span whileHover={{ scale: 1.1 }}>Contact</motion.span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
