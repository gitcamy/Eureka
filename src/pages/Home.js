import { motion } from "framer-motion";
import "./Home.css";
import homeMobile from "../assets/homeMobile.jpg";
import homeDesktop from "../assets/homeDesktop.jpg";
import ControlledAccordions from "../components/ControlledAccordions";
import { homeAccordionData } from "../data/HomeData";

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
              <h1>Retiring in Spain made easy.</h1>
              <p>
                Invest in your furture, with the help of professional advisors.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <ControlledAccordions
        title="Our Services: Helping You Retire in Spain with Confidence"
        subtitle="At Eureka, we provide expert guidance and customized solutions to help US citizens retire in Spain seamlessly. From visa applications to real estate investments, our team ensures a smooth transition so you can enjoy your dream retirement in Spain."
        accordionData={homeAccordionData}
      />
    </>
  );
};

export default Home;
