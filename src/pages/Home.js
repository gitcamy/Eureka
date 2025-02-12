import { motion } from "framer-motion";
import "./Home.css";
// import homeMobile from "../assets/homeMobile.jpg";
// import homeDesktop from "../assets/homeDesktop.jpg";
import beachHome from "../assets/beachHome.jpg";
import Banner from "../components/banner.js";
import WelcomeMessage from "../components/WelcomeMessage.js";
import Services from "../components/Services.js";
import { bannerText, welcomeText, getStarted } from "../data/HomeData";

const Home = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div className="home-container">
        <motion.div
          className="mobile-bg-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ backgroundImage: `url(${beachHome})` }}
        />
        <motion.div
          className="desktop-bg-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ backgroundImage: `url(${beachHome})` }}
        />
        <motion.div
          className="page"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        ></motion.div>
      </div>
      <Banner message={bannerText} />
      <WelcomeMessage text={welcomeText} buttonTitle={getStarted} />
      <Services />
    </>
  );
};

export default Home;
