import React from "react";
import "./Sercives.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Answsome</span>
        <span>services</span>
        <span>
          Frontend Developer with high level of experience in web designing{" "}
          <br />
          and development, producting the quality work
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blurl"></div>
      </div>
      <div className="cards"></div>
    </div>
  );
};

export default Services;
