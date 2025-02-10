import React from "react";
import "./banner.css";

const Banner = ({ message }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-message">{message}</div>
        <div className="banner-message">{message}</div>
        <div className="banner-message">{message}</div>
        <div className="banner-message">{message}</div>
        <div className="banner-message">{message}</div>
        <div className="banner-message">{message}</div>
      </div>
    </div>
  );
};

export default Banner;
