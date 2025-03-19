import ControlledAccordions from "../components/ControlledAccordions.js";
import { homeAccordionData } from "../data/HomeData";
import "./Services.css";

function Services() {
  return (
    <div
      className="container"
      style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
    >
      <div className="divContainer servicesTitleContainer">
        <h1>Our Services</h1>
        <hr style={{ color: "#000", borderBottom: ".75px solid #000" }}></hr>
        <div className="subTitleContainer">
          <p className="subtitle">
            Retirement in Spain as a U.S. citizen made easy
          </p>
        </div>
      </div>
      <ControlledAccordions accordionData={homeAccordionData} />
    </div>
  );
}

export default Services;
