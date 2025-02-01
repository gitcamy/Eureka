import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="page-title">About Us</h1>
      <div className="page-content">
        <h2>Our Story</h2>
        <p>Learn about our journey and what makes us unique.</p>
      </div>
    </motion.div>
  );
};

export default About;
