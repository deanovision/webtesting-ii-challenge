import React from "react";

const Display = ({ info }) => {
  return (
    <div>
      <h2>Play Ball!</h2>
      <span>{`Strikes: ${info.strikes} `}</span>
      <span>{`Balls: ${info.balls}`} </span>
    </div>
  );
};
export default Display;
