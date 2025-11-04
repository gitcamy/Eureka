import { motion, useInView } from "framer-motion";
import { useRef, useContext } from "react";
import "./Home.css";
import Navbar from "../components/Navbar.js";
import Contact from "../components/Contact.js";
import { MobileContext } from "../context/MobileContext.js";

const Home = () => {
  const isMobile = useContext(MobileContext);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const whyRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-20% 0px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-20% 0px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-20% 0px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-20% 0px" });

  const scrollToSection = (event, sectionId) => {
    if (event) event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section id="hero" className="section hero">
        <div className="hero-images">
          {isMobile ? (
            <img src={require("../assets/leftHome.jpg")} alt="Spanish architecture with pool" className="hero-image-mobile" />
          ) : (
            <>
              <img src={require("../assets/leftHome.jpg")} alt="Spanish architecture with pool" className="hero-image" />
              <img src={require("../assets/rightHome.jpg")} alt="Classical Spanish apartment" className="hero-image" />
            </>
          )}
        </div>
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="hero-content"
        >
          <h1 className="hero-title">Buy, Sell, or Invest in Spanish Property — Strategically</h1>
          <p className="hero-subtitle">We are a real estate consulting boutique specialized in helping U.S. citizens find, acquire, and manage property in Spain with clarity, confidence, and strategic insight.</p>
          <a href="#contact" className="cta" onClick={(e) => scrollToSection(e, "contact")}>Schedule a consultation</a>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 24 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container"
        >
          <h2>About</h2>
          <p>
            We help international buyers discover, evaluate, and secure remarkable
            properties across Northern Spain — with clarity, care, and local expertise.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="section section-alt">
        <motion.div
          ref={servicesRef}
          initial={{ opacity: 0, y: 24 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container services-grid"
        >
          <h2>Our Services</h2>
          <ul className="cards">
            <li className="card"><h3>Search & Discovery</h3><p>Curated listings and on-the-ground scouting.</p></li>
            <li className="card"><h3>Advisory</h3><p>Due diligence, market context, and negotiation support.</p></li>
            <li className="card"><h3>End-to-End</h3><p>From viewings to closing with vetted local partners.</p></li>
          </ul>
        </motion.div>
      </section>

      {/* Why Us */}
      <section id="why" className="section">
        <motion.div
          ref={whyRef}
          initial={{ opacity: 0, y: 24 }}
          animate={whyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container why"
        >
          <h2>Why Us</h2>
          <ul className="bullets">
            <li>Independent, buyer-first guidance</li>
            <li>Local knowledge across Basque Country, Cantabria, Asturias</li>
            <li>Clear process, transparent pricing</li>
          </ul>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div ref={contactRef} className="container">
          <Contact />
        </div>
      </section>
    </>
  );
};

export default Home;
