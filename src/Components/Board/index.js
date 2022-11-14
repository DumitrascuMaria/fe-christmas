import React from "react";
import Cards from "../Cards";
import Question from "../Question";
import "./index.scss";

const Board = () => {
  return (
    <div className="board">
      <Question></Question>
      <Cards />
    </div>
  );
};

export default Board;
