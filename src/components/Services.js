import ControlledAccordions from "../components/ControlledAccordions.js";
import { homeAccordionData } from "../data/HomeData";
import "./Services.css";

function Services() {
  return (
    <div className="container">
      <div className="container divContainer" style={{ paddingTop: "4rem" }}>
        <h1>Our Services</h1>
        <hr></hr>
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
