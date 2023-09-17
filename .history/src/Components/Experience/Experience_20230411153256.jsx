import React from "react";
import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  return (
    <div className="experience">
      <div className="achievement">
        <div className="circle">2+</div>
        <span style={{ color: darkMode ? "white" : "" }}>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">20+</div>
        <span style={{ color: darkMode ? "white" : "" }}>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">1+</div>
        <span style={{ color: darkMode ? "white" : "" }}>companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
