import React from "react";
import "./Works.css";
const Works = () => {
  return (
    <div className="">
      <div className="awesome">
        <span>My Answsome</span>
        <span>services</span>
        <span>
          Frontend Developer with high level of experience in web designing{" "}
          <br />
          and development, producting the quality work
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>
    </div>
  );
};

export default Works;
