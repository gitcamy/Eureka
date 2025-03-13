import "./WelcomeMessage.css";
import { Link } from "react-router-dom";
import React from "react";

const WelcomeMessage = ({ text, buttonTitle, scrollToContact }) => {
  const firstSentence = text[0];
  const words = firstSentence.split(" ");
  const firstWord = words[0]; // Get the first word
  const remainingText = words.slice(1).join(" "); // Join the remaining words
  return (
    <div className="container">
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
  );
};

export default WelcomeMessage;
