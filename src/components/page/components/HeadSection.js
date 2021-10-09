import coord from "./coord.png";
import coffee from "./coffee.png";

import "./headSection.css";

export default function HeadSection() {
  return (
    <div className="head-section">
      <div className="container">
        <div className="left-content">
          <h1 className="title">
            Make better coffee
            <img className="coffee-icon" src={coffee} alt="coffee" />
          </h1>
          <span>why learn how to blog?</span>
        </div>
        <img className="coord-img" src={coord} alt="cooperation" />
      </div>
    </div>
  );
}
