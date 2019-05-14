import React from "react";

const Display = ({ info }) => {
  const strikes = () => {
    if (!info) {
      return "Strikes: 0";
    } else {
      return `Strikes: ${info.strikes}`;
    }
  };
  const balls = () => {
    if (!info) {
      return "Balls: 0";
    } else {
      return `Balls: ${info.balls}`;
    }
  };
  return (
    <div>
      <h2>Play Ball!</h2>
      <span>{strikes()} </span>
      <span>{balls()} </span>
    </div>
  );
};
export default Display;
