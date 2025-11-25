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
          <picture>
            <source 
              type="image/webp"
              srcSet={`
                ${require("../assets/leftHome-480.webp")} 480w,
                ${require("../assets/leftHome-768.webp")} 768w
              `}
              sizes="100vw"
            />
            <img
              src={require("../assets/leftHome.jpg")}
              srcSet={`
                ${require("../assets/leftHome-480.jpg")} 480w,
                ${require("../assets/leftHome-768.jpg")} 768w
              `}
              sizes="100vw"
              alt="Spanish architecture with pool"
              className="hero-image-mobile"
              loading="eager"
              decoding="async"
            />
          </picture>
        ) : (
          <>
            <picture>
              <source 
                type="image/webp"
                srcSet={`
                  ${require("../assets/leftHome-768.webp")} 768w,
                  ${require("../assets/leftHome-1200.webp")} 1200w
                `}
                sizes="(max-width: 1200px) 50vw, 600px"
              />
              <img
                src={require("../assets/leftHome.jpg")}
                srcSet={`
                  ${require("../assets/leftHome-768.jpg")} 768w,
                  ${require("../assets/leftHome-1200.jpg")} 1200w
                `}
                sizes="(max-width: 1200px) 50vw, 600px"
                alt="Spanish architecture with pool"
                className="hero-image"
                loading="eager"
                decoding="async"
              />
            </picture>
            <picture>
              <source 
                type="image/webp"
                srcSet={`
                  ${require("../assets/rightHome-768.webp")} 768w,
                  ${require("../assets/rightHome-1200.webp")} 1200w
                `}
                sizes="(max-width: 1200px) 50vw, 600px"
              />
              <img
                src={require("../assets/rightHome.jpg")}
                srcSet={`
                  ${require("../assets/rightHome-768.jpg")} 768w,
                  ${require("../assets/rightHome-1200.jpg")} 1200w
                `}
                sizes="(max-width: 1200px) 50vw, 600px"
                alt="Classical Spanish apartment"
                className="hero-image"
                loading="eager"
                decoding="async"
              />
            </picture>
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
          onClick={() => window.open("https://calendar.app.google/nwwowhJGMdAYrK7r5", "_blank")}
        >
          Schedule free consultation
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;

