import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clieants</span>
        <span>
          Frontend Developer with high level of experience in web designing{" "}
          <br />
          and development, producting the quality work
          <br />
          and development, producting the quality work
          <br />
          and development, producting the quality work
        </span>

        <button className="button s-button">Hire me</button>

        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
