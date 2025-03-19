import "./WelcomeMessage.css";
import React from "react";
import Cow from "../assets/cow.jpg";
import StackedbenefitsCards from "../components/Cards.js";

const WelcomeMessage = ({
  text,
  buttonTitle,
  scrollToContact,
  welcomeCards,
}) => {
  const firstSentence = text[0];
  const words = firstSentence.split(" ");
  const firstWord = words[0]; // Get the first word
  const remainingText = words.slice(1).join(" "); // Join the remaining words
  return (
    <div className="container welcome-msg">
      <div className="welcome-box">
        <div style={{ padding: "1rem" }} className="mobile-grow">
          <p className="textBlock">
            <span className="firstWord">{firstWord}</span> {remainingText}{" "}
          </p>
          {text.slice(1).map((block, index) => (
            <p key={index} className="textBlock">
              {block}
            </p>
          ))}
          <div className="center">
            <button className="secondary" onClick={scrollToContact}>
              {buttonTitle}
            </button>
          </div>
        </div>
        <div style={{ width: "50%", padding: "4rem" }} className="mobile-hide">
          <StackedbenefitsCards data={welcomeCards} />
          {/* <img className="welcome-img" src={Cow} alt="cow"></img> */}
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
