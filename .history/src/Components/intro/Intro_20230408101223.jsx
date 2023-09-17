import React from "react";
import "./intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoj1 from "../../img/glassesimoji.png";
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
          <img src={LinkedIn} />
          <img src={Instagram} />
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} />
        <img src={Vector2} />
        <img src={Boy} />
        <div></div>
      </div>
    </div>
  );
};

export default Intro;
