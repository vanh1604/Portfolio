import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Insta from "@iconscout/react-unicons/icons/uil-facebook";
import Insta from "@iconscout/react-unicons/icons/uil-github";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} style={{ width: "100%" }} />
      <div className="f-content">
        <span>VietAnhScout@gmail.com</span>
        <div className="f-icons"></div>
      </div>
    </div>
  );
};

export default Footer;
