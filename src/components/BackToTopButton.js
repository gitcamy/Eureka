import React, { useState, useEffect, useContext } from "react";
import "./BackToTopButton.css"; // Optional: Create a CSS file for styling
import { MobileContext } from "../context/MobileContext"; // Import the context

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useContext(MobileContext);

  const toggleVisibility = () => {
    const footerOffset = document.body.offsetHeight - window.innerHeight; // Calculate the offset to the bottom of the page

    if (window.pageYOffset > 300 && window.pageYOffset < footerOffset - 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="back-to-top" // Add a class for mobile styling if needed
          onClick={scrollToTop}
        >
          {isMobile ? <i className="fa fa-angles-up"></i> : "↑ Back to Top"}{" "}
          {/* Render different text for mobile */}
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
