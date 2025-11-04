import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Services.css";

const Services = () => {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, {
    once: true,
    margin: "-20% 0px",
  });

  return (
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
          <li className="card">
            <h3>Search & Discovery</h3>
            <p>Curated listings and on-the-ground scouting.</p>
          </li>
          <li className="card">
            <h3>Advisory</h3>
            <p>Due diligence, market context, and negotiation support.</p>
          </li>
          <li className="card">
            <h3>End-to-End</h3>
            <p>From viewings to closing with vetted local partners.</p>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Services;

