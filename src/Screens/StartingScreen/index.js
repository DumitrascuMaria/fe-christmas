import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const StartingScreen = () => {
  return (
    <div className="starting-screen">
      <h1>Ce spun programatorii</h1>
      <p>
        <Link to="game">Play Game</Link>
      </p>
    </div>
  );
};

export default StartingScreen;
