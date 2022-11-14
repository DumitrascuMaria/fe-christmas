import React from "react";
import { Link } from "react-router-dom";

const StartingScreen = () => {
  return (
    <div>
      <h1>Ce spun programatorii</h1>
      <p>
        <Link to="game">Play Game</Link>
      </p>
    </div>
  );
};

export default StartingScreen;
