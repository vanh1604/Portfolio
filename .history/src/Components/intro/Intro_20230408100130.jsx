import React from "react";
import "./intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span className="">Hi ! I Am Dreamabtme</span>
          <span>Vanh Nguyen</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the quality work
          </span>
        </div>
        <button className="i-button button">Hire me</button>
        <div className="i-icon">
          <img src={Github} />
        </div>
      </div>

      <div className="i-right"></div>
    </div>
  );
};

export default Intro;
