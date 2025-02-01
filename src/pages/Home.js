import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="page-title">Welcome</h1>
      <div className="page-content">
        <h2>Modern React Application</h2>
        <p>Experience smooth animations and sleek design.</p>
      </div>
    </motion.div>
  );
};

export default Home;
