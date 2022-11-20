import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Stories/Button";
import "./index.scss";
const StartingScreen = () => {
  return (
    <div className="starting-screen">
      <div className="actions-div">
        <Link to="game">
          <Button text="Play Game" />
        </Link>
      </div>
    </div>
  );
};

export default StartingScreen;
