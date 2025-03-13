import { motion, useInView } from "framer-motion";
import "./Home.css";
import homeImage from "../assets/gazte.jpg";
import Banner from "../components/banner.js";
import WelcomeMessage from "../components/WelcomeMessage.js";
import Services from "../components/Services.js";
import Cards from "../components/Cards.js";
import { bannerText, welcomeText, getStarted } from "../data/HomeData";
import { useRef, useContext } from "react";
import { Benefits } from "../data/CardsData.js";
import Footer from "../components/footer.js";
import Navbar from "../components/Navbar.js";
import MobileCards from "../components/MobileCards.js";
import { MobileContext } from "../context/MobileContext";
import Contact from "../components/Contact.js";

const Home = () => {
  const cardTitle = "Why Retire in Northern Spain?";
  // Create refs for each component
  const welcomeRef = useRef(null);
  const servicesRef = useRef(null);
  const cardsRef = useRef(null);
  const contactRef = useRef(null);
  const isMobile = useContext(MobileContext);

  // Use useInView for each component
  const welcomeInView = useInView(welcomeRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true });
  const cardsInView = useInView(cardsRef, { once: true });

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="home-container">
        <Navbar scrollToContact={scrollToContact} />
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
        <WelcomeMessage
          text={welcomeText}
          buttonTitle={getStarted}
          scrollToContact={scrollToContact}
        />
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
        {isMobile ? (
          <MobileCards title={cardTitle} data={Benefits} />
        ) : (
          <Cards data={Benefits} title={cardTitle} />
        )}
        <section ref={contactRef}>
          <Contact />
        </section>
        <Footer scrollToContact={scrollToContact} />
      </motion.div>
    </>
  );
};

export default Home;
