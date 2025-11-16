import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import "./Why.css";
import greenHouse from "../assets/greenHouse.jpg";

const Why = () => {
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-20% 0px" });
  const isMobile = useContext(MobileContext);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  const reasons = [
    {
      number: 1,
      title: "INDEPENDENT & TRANSPARENT",
      description: "We work only for you—no hidden seller incentives, no pressure to close on overpriced listings. Our flat-fee structure aligns our success with yours."
    },
    {
      number: 2,
      title: "FULL-SERVICE EXPERTISE",
      description: "From investment strategy to tax optimization, renovation design to tenant management, we provide end-to-end support through our network of vetted professionals."
    },
    {
      number: 3,
      title: "BILINGUAL & BICULTURAL",
      description: "We understand American expectations and Spanish realities. Our team bridges language barriers, cultural differences, and legal complexities with ease."
    },
    {
      number: 4,
      title: "DATA-DRIVEN STRATEGY",
      description: "We work only for you—no hidden seller incentives, no pressure to close on overpriced listings. Our flat-fee structure aligns our success with yours."
    },
    {
      number: 5,
      title: "REMOTE TRANSACTION CAPABILITY",
      description: "Buy, sell, or manage Spanish property without leaving the US. We handle NIE applications, bank accounts, signing authority, and all bureaucratic requirements."
    }
  ];

  return (
    <section id="why" className="section why-section" style={{paddingTop: "0px"}}>
      <motion.div
        ref={whyRef}
        initial={{ opacity: 0, y: 24 }}
        animate={whyInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container why-container"
      >
        {isMobile ? (
          // Mobile View - Accordion
          <>
            <div className="why-hero-mobile">
              <img src={greenHouse} alt="Spanish building" className="why-hero-image" />
              <h2 className="why-title-overlay">Why Eureka?</h2>
            </div>
            
            <ul className="why-accordion">
              {reasons.map((reason, index) => {
                const isOpen = activeIndex === index;
                const panelId = `why-panel-${index}`;
                return (
                  <li
                    key={reason.number}
                    className={`why-accordion-card ${isOpen ? "open" : ""}`}
                  >
                    <button
                      type="button"
                      className="why-accordion-trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => handleToggle(index)}
                    >
                      <div className="why-accordion-header">
                        <div className="why-accordion-number">
                          <span>{reason.number}</span>
                        </div>
                        <span className="why-accordion-title">{reason.title}</span>
                      </div>
                      <motion.span
                        className="why-accordion-arrow"
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      >
                        →
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          className="why-accordion-panel"
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        >
                          <div className="why-accordion-panel-content">
                            <p>{reason.description}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          // Desktop View
          <>
            <h2 className="why-title">Why Eureka?</h2>
            <div className="why-content-container">
              <div className="why-left">
                <div className="why-image-container">
                  <img src={greenHouse} alt="Spanish building" className="why-image" />
                </div>
              </div>
              <div className="why-right">
                {reasons.map((reason) => (
                  <div key={reason.number} className="why-card">
                    <div className="why-card-number-container">
                      <div className="why-card-number">
                        <span>{reason.number}</span>
                      </div>
                      <h3 className="why-card-title">{reason.title}</h3>
                    </div>
                    <div className="why-card-content">
                      <p className="why-card-description">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default Why;

