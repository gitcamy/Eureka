import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MobileContext } from "../context/MobileContext.js";
import Button from "./Button.js";
import ibaiImage from "../assets/ibai2.png";
import michaelImage from "../assets/michael.png";
import "./Team.css";

const Team = () => {
  const isMobile = useContext(MobileContext);
  const [activePerson, setActivePerson] = useState("michael");
  const [expandedCards, setExpandedCards] = useState({});

  const teamMembers = {
    michael: {
      name: "Michael Hochberg",
      title: "CO-CEO, U.S. OPERATIONS",
      bio: [
        "Raised in New Jersey and seasoned across México, Spain, and France, Michael brings a unique blend of strategic consulting and real estate development experience. Before co-founding Eurkera, he spent years in management consulting and energy asset development. Now splitting his time between New York, Miami, and Spain, Michael understands both the American investor mindset and the Spanish market intricacies—making him the ideal bridge for clients seeking clarity and confidence in their Spanish property ventures.",
      ],
      image: michaelImage
    },
    ibai: {
      name: "Ibai P. Prudencio",
      title: "CO-CEO, SPAIN OPERATIONS",
      bio: [
        "An economist and real estate specialist, Ibai has guided over 1,000 clients through Spain's complex property landscape. After years working internationally as a strategy consultant, he returned to Spain to apply his expertise where it matters most—helping foreign buyers make informed, profitable decisions. Ibai specializes in financial modeling, legal compliance, and tax optimization, ensuring every transaction is structured for success and fully compliant with Spanish regulations.",
      ],
      image: ibaiImage
    }
  };

  const handleSwap = () => {
    setActivePerson(activePerson === "michael" ? "ibai" : "michael");
  };

  const toggleCard = (memberKey) => {
    setExpandedCards(prev => ({
      ...prev,
      [memberKey]: !prev[memberKey]
    }));
  };

  const activeMember = teamMembers[activePerson];
  const isMichaelActive = activePerson === "michael";

  // Mobile view - repeating cards
  if (isMobile) {
    return (
      <section id="team" className="team-section team-mobile">
        <div className="team-container-mobile">
          {Object.entries(teamMembers).map(([key, member]) => {
            const isExpanded = expandedCards[key] || false;
            return (
              <div key={key} className="team-card-mobile">
                <h2 className="team-name-mobile">{member.name}</h2>
                
                <div className="team-image-mobile-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image-mobile"
                  />
                </div>

                <p className="team-title-mobile">{member.title}</p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="team-bio-mobile-wrapper"
                    >
                      <div className="team-bio-mobile">
                        {member.bio.map((paragraph, index) => (
                          <p key={index} className="team-bio-text-mobile">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="team-arrow-container">
                  <Button
                    variant="primary"
                    style="outlined"
                    arrow={isExpanded ? "up" : "down"}
                    onClick={() => toggleCard(key)}
                    aria-label={isExpanded ? "See less" : "Read more"}
                    className="team-toggle-button"
                  >
                    {isExpanded ? "See less" : "Read more"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  // Desktop view - existing overlapping images
  return (
    <section id="team" className="team-section team-desktop">
      <div className="team-container">
        <div className="team-images-wrapper">
          {/* Ibai Image */}
          <motion.div
            className="team-image-wrapper"
            initial={false}
            animate={{
              width: isMichaelActive ? "300px" : "500px",
              height: isMichaelActive ? "400px" : "650px",
              left: isMichaelActive ? "0" : "200px",
              top: isMichaelActive ? "-20px" : "0",
              zIndex: isMichaelActive ? 1 : 2
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img
              src={ibaiImage}
              alt={teamMembers.ibai.name}
              className="team-image"
            />
          </motion.div>

          {/* Michael Image */}
          <motion.div
            className="team-image-wrapper"
            initial={false}
            animate={{
              width: isMichaelActive ? "500px" : "300px",
              height: isMichaelActive ? "650px" : "400px",
              left: isMichaelActive ? "200px" : "0",
              top: isMichaelActive ? "0" : "-20px",
              zIndex: isMichaelActive ? 2 : 1
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img
              src={michaelImage}
              alt={teamMembers.michael.name}
              className="team-image"
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="team-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePerson}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="team-text-block"
            >
              <h2 className="team-name">{activeMember.name}</h2>
              <p className="team-title">{activeMember.title}</p>
              <div className="team-bio">
                {activeMember.bio.map((paragraph, index) => (
                  <p key={index} className="team-bio-text">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="team-arrow-container">
                <Button
                  variant="primary"
                  style="filled"
                  arrow="right"
                  onClick={handleSwap}
                  aria-label="Switch team member"
                  className="team-swap-button"
                >
                  Next
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Team;

