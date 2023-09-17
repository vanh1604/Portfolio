import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} style={{ width: "100%" }} />
      <div className="f-content">
        <span>VietAnhsCOUT@GMAIL.COM</span>
      </div>
    </div>
  );
};

export default Footer;
