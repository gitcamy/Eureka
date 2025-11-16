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
            We're not real estate agents—we're your strategic advisors in the Spanish property market.
            <br />
            <br />
            Eurkera Investments is a boutique consulting firm specializing in helping American citizens navigate the complexities of buying, selling, and managing property in Spain. While traditional agents work for sellers, we work exclusively for you. 
            </p>
            <p className="about-text">
            Our independent, buyer-first approach means we search the entire market, provide unbiased financial analysis, and negotiate with only your interests in mind. With deep expertise in Spanish real estate law, market dynamics, and cross-border transactions, we bridge the gap between American expectations and Spanish realities—handling everything from investment strategy to closing, even if you never leave the U.S.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

