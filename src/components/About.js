import { motion, useInView } from "framer-motion";
import { useRef, useContext } from "react";
import { MobileContext } from "../context/MobileContext.js";
import "./About.css";

const About = ({ scrollToSection }) => {
  const isMobile = useContext(MobileContext);
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-20% 0px" });

  return (
    <section
      id="about"
      className={`section ${isMobile ? "about-mobile" : "about-desktop"}`}
    >
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 24 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container"
      >

        <div className="about-content">
          <h2 className="about-title">About us</h2>
          <div className="about-text-columns">
            <p className="about-text">
            We are not real estate agents. We are independent consultants with deep 
  knowledge of the Spanish real estate market, working exclusively on your 
  behalf. We're asmall, multi-disciplinary and bilingual team with a unique blend 
  of backgrounds. 
            </p>
            <p className="about-text">
            We help you define a strategy, find the right property, 
  and complete the transaction securely — even from abroad. Together, we offer a real estate experience that's both creative and 
  personalized, with a special understanding of the needs of international 
  buyers in Spain.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

