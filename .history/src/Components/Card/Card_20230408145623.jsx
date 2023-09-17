import React from "react";
import "./Card.css";
const Card = ({ emoji, headding, detail }) => {
  return (
    <div className="Card">
      <img src={emoji} />
      <span>{headding}</span>
      <span>{detail}</span>
      <button className="c-button">Learn More</button>
    </div>
  );
};

export default Card;
