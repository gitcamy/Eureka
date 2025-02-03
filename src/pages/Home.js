import { motion } from "framer-motion";
import "./Home.css";
import homeMobile from "../assets/homeMobile.jpg";
import homeDesktop from "../assets/homeDesktop.jpg";

const Home = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div className="home-container">
        <motion.div
          className="mobile-bg-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ backgroundImage: `url(${homeMobile})` }}
        />
        <motion.div
          className="desktop-bg-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ backgroundImage: `url(${homeDesktop})` }}
        />
        <motion.div
          className="page"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="center-content">
            <div className="page-content">
              <h2>Modern React Application</h2>
              <p>Experience smooth animations and sleek design.</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="home-container">hello</div>
    </>
  );
};

export default Home;
