import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Stories/Button";
import { firstGame, secondGame, thirdGame } from "../../utils/questions";
import "./index.scss";
const StartingScreen = () => {
  return (
    <div className="starting-screen">
      <div className="actions-div">
        <Link to="game" state={firstGame}>
          <Button text="Play First Game" />
        </Link>
        <Link to="game" state={secondGame}>
          <Button text="Play Second Game" />
        </Link>
        <Link to="game" state={thirdGame}>
          <Button text="Play Third Game" />
        </Link>
      </div>
    </div>
  );
};

export default StartingScreen;
