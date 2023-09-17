import React from "react";

const Card = ({ emoji, headding, detail }) => {
  return (
    <div className="Card">
      <img src={emoji} />
      <span></span>
    </div>
  );
};

export default Card;
