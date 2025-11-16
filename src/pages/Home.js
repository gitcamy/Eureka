import { useRef } from "react";
import "./Home.css";
import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import About from "../components/About.js";
import Team from "../components/Team.js";
import Services from "../components/Services.js";
import Why from "../components/Why.js";
import Contact from "../components/Contact.js";
import Footer from "../components/Footer.js";

const Home = () => {
  const contactRef = useRef(null);

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
      <Hero scrollToSection={scrollToSection} />
      <About scrollToSection={scrollToSection} />
      <Team />
      <Services />
      <Why />
      <section id="contact" className="section">
        <div ref={contactRef} className="container">
          <Contact />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
