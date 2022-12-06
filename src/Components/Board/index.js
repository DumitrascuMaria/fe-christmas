import React from "react";
import Cards from "../Cards";
import Question from "../Question";
import "./index.scss";

const Board = ({ question, calcPoints, questionIndex }) => {
  return (
    <div className="board-container">
      <div className="board">
        <Question
          title={question.question}
          questionIndex={questionIndex}
        ></Question>
        <Cards
          questionIndex={questionIndex}
          answears={question.answears}
          calcPoints={calcPoints}
        />
      </div>
    </div>
  );
};

export default Board;
