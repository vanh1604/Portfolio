import React from "react";

const Card = ({ emoji, headding, detail }) => {
  return (
    <div className="Card">
      <img src={emoji} />
      <span>{headding}</span>
    </div>
  );
};

export default Card;
