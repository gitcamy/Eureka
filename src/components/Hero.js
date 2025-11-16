import { motion } from "framer-motion";
import { useContext } from "react";
import { MobileContext } from "../context/MobileContext.js";
import Button from "./Button.js";
import "./Hero.css";

const Hero = ({ scrollToSection }) => {
  const isMobile = useContext(MobileContext);

  return (
    <section id="hero" className="section hero">
      <div className="hero-images">
        {isMobile ? (
          <img
            src={require("../assets/leftHome.jpg")}
            alt="Spanish architecture with pool"
            className="hero-image-mobile"
          />
        ) : (
          <>
            <img
              src={require("../assets/leftHome.jpg")}
              alt="Spanish architecture with pool"
              className="hero-image"
            />
            <img
              src={require("../assets/rightHome.jpg")}
              alt="Classical Spanish apartment"
              className="hero-image"
            />
          </>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="hero-content"
      >
        <h1 className="hero-title">
          Buy, Sell, or Invest in Spanish Property — Strategically
        </h1>
        <p className="hero-subtitle">
          We are a real estate consulting boutique specialized in helping U.S.
          citizens find, acquire, and manage property in Spain with clarity,
          confidence, and strategic insight.
        </p>
        <Button
          variant="primary"
          style="filled"
          onClick={(e) => scrollToSection(e, "contact")}
        >
          Schedule free consultation
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;

