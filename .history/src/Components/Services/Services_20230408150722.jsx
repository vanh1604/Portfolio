import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";

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
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            headding={"Design"}
            detail={"Figma,Sketch,Photoshop,Adobe,Adobe sd"}
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            headding={"Developer"}
            detail={"Html, Css, JavaScript, React"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
