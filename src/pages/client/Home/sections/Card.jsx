import React from "react";
import "../sections/Card.css";
import Oval from "../../../../assets/Oval.svg";
import Icon1 from "../../../../assets/Combined Shape.svg";
import Icon2 from "../../../../assets/Combined Shape (1).svg";
import Icon3 from "../../../../assets/Shape.svg";

const Card = () => {
  return (
    <div className="cards-section">
      <div className="container">
        <div className="card-title">
          <p className="title-p">Advanced Statistics</p>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="icons-content">
              <div style={{ position: "relative" }}>
                <img src={Oval} alt="" />
              </div>
              <div className="icon-svg" style={{ position: "absolute", top: "2rem", left: "56px" }}>
                <img src={Icon1} alt="" />
              </div>
            </div>
            <div style={{ marginTop: 12 }}>
              <h2>Brand Recognition</h2>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="icons-content">
              <div style={{ position: "relative" }}>
                <img src={Oval} alt="" />
              </div>
              <div className="icon-svg" style={{ position: "absolute", left: "54px" }}>
                <img src={Icon2} alt="" />
              </div>
            </div>
            <div style={{ marginTop: 12 }}>
              <h2>Detailed Records</h2>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="icons-content">
              <div style={{ position: "relative" }}>
                <img src={Oval} alt="" />
              </div>
              <div className="icon-svg" style={{ position: "absolute", left: "50px" }}>
                <img src={Icon3} alt="" />
              </div>
            </div>
            <div style={{ marginTop: 12 }}>
              <h2>Fully Customizable</h2>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
