import React, { useState, useEffect } from "react";
import WrongAnswer from "../../Components/WrongAnswer";
import Board from "../../Components/Board";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "./index.scss";
import { questions } from "../../utils/questions";

const GameScreen = () => {
 
  const [total, setTotal] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const calcPoints = (points) => {
    setTotal((current) => current + points);
  };
  const nextQuestion = () => {
    setQuestionIndex((current) => current + 1);
    setIsPressed(false);
    setTotal(0);
  };
  const keyPressFct = (e) => {
    if (e.key === "Escape") {
      setIsPressed(true);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", keyPressFct);

    return () => {
      document.removeEventListener("keydown", keyPressFct);
    };
  }, [keyPressFct]);
  console.log("render gamescreen");
  return (
    <div className="game-screen">
      <Header total={total} />
      <Board
        questionIndex={questionIndex}
        question={questions[questionIndex]}
        calcPoints={calcPoints}
      ></Board>
      {isPressed && <WrongAnswer />}

      <Footer nextQuestion={nextQuestion}></Footer>
    </div>
  );
};

export default GameScreen;
