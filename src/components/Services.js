import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import "./Services.css";

const services = [
  {
    title: "Buy",
    description:
      "We help you define a clear investment strategy, then execute it with precision. From targeted property searches across all of Spain to detailed financial projections and buyer representation, we handle every step—including obtaining your NIE, opening bank accounts, and even signing on your behalf. Our flat-fee model means we search the entire market, not just select listings, and negotiate the best possible deal for you. With our network of trusted legal and tax professionals, you'll have expert guidance through Spain's complex regional property laws.",
  },
  {
    title: "Sell",
    description:
      "Selling Spanish property from abroad doesn't have to be frustrating. We provide realistic valuations based on current market data, develop targeted marketing strategies for international buyers, and manage the entire sale process—including all paperwork and legal representation. If needed, we can sign on your behalf, making it possible to close without returning to Spain. Our tax advisors ensure compliance while optimizing how your proceeds are transferred home.",
  },
  {
    title: "Renovate",
    description:
      "Maximize your property's value and appeal with strategic renovations. In partnership with Neu Studio, our trusted architecture and interior design firm, we manage complete renovation projects from concept to completion. We handle design, permitting, contractor oversight, and local bureaucracy—while focusing on upgrades that deliver the highest ROI, whether you're preparing to live in the property, rent it out, or resell.",
  },
  {
    title: "Manage",
    description:
      "Protect your investment with comprehensive property management tailored for remote owners. We oversee day-to-day operations, coordinate short or long-term rentals, screen tenants, draft compliant lease agreements, handle maintenance, and navigate rental licensing requirements in regulated cities like Barcelona and Madrid. You get regular reporting and peace of mind—all managed by trusted professionals on the ground.",
  },
];

const Services = () => {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, {
    once: true,
    margin: "-20% 0px",
  });
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="services" className="section-alt">
      <motion.div
        ref={servicesRef}
        initial={{ opacity: 0, y: 24 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container services-layout"
      >
        <div className="services-copy">
          <h2 className="services-title">Our Services</h2>
          <p className="services-description">
          We help U.S.-based clients buy property in Spain — for relocation, vacation, or investment.
          </p>
        </div>

        <ul className="services-accordion">
          {services.map((service, index) => {
            const isOpen = activeIndex === index;
            const panelId = `service-panel-${index}`;
            return (
              <li
                key={service.title}
                className={`service-card ${isOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="service-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => handleToggle(index)}
                >
                  <span className="service-title">{service.title}</span>
                  <motion.span
                    className="service-arrow"
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
                      className="service-panel"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="service-panel-content">
                        <p>{service.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
};

export default Services;

