import { motion } from "framer-motion";
import Footer from "../components/footer.js";

const About = () => {
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
      <motion.div
        className="page"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h1 className="page-title">About Us</h1>
        <div className="page-content">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Learn about our journey and what makes us unique.
          </motion.p>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default About;
