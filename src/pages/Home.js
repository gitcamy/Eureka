import { motion, useInView } from "framer-motion";
import "./Home.css";
// import homeMobile from "../assets/homeMobile.jpg";
// import homeDesktop from "../assets/homeDesktop.jpg";
import homeImage from "../assets/gazte.jpg";
import Banner from "../components/banner.js";
import WelcomeMessage from "../components/WelcomeMessage.js";
import Services from "../components/Services.js";
import Cards from "../components/Cards.js";
import { bannerText, welcomeText, getStarted } from "../data/HomeData";
import { useRef } from "react";
import { Benefits } from "../data/CardsData.js";

const Home = () => {
  const cardTitle = "Why Retire in Northern Spain?";
  // Create refs for each component
  const welcomeRef = useRef(null);
  const servicesRef = useRef(null);
  const cardsRef = useRef(null);

  // Use useInView for each component
  const welcomeInView = useInView(welcomeRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true });
  const cardsInView = useInView(cardsRef, { once: true });

  return (
    <>
      <div className="home-container">
        <motion.div
          className="mobile-bg-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ backgroundImage: `url(${homeImage})` }}
        />
        <motion.div
          className="desktop-bg-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ backgroundImage: `url(${homeImage})` }}
        />
        <motion.div
          className="page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        ></motion.div>
      </div>
      <Banner message={bannerText} />
      <motion.div
        ref={welcomeRef}
        initial={{ opacity: 0, y: 20 }}
        animate={welcomeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <WelcomeMessage text={welcomeText} buttonTitle={getStarted} />
      </motion.div>
      <motion.div
        ref={servicesRef}
        initial={{ opacity: 0, y: 20 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Services />
      </motion.div>
      <motion.div
        ref={cardsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Cards data={Benefits} title={cardTitle} />
      </motion.div>
    </>
  );
};

export default Home;
