import React from "react";

const Card = ({backgroundColor}) => {
  return (
    <div className="card" style={{background: backgroundColor}}>
      <div>
        <h1>CARD FOR Main </h1>
      </div>
    </div>
  );
};

export default Card;
