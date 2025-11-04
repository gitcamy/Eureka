import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Why.css";

const Why = () => {
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-20% 0px" });

  return (
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
  );
};

export default Why;

