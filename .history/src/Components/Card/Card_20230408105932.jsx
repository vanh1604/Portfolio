import React from "react";

const Card = ({ emoji, headding, detail }) => {
  return (
    <div className="Card">
      <img src={emoji} />
    </div>
  );
};

export default Card;
