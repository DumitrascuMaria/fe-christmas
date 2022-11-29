import React, { useEffect, useState } from "react";
import WrongAnswer from "../../Components/WrongAnswer";
import Board from "../../Components/Board";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import useSound from "use-sound";
import sound from "../../utils/buzzer.wav";
import "./index.scss";
import { useLocation } from "react-router-dom";

const GameScreen = () => {
  const location = useLocation();
  const [total, setTotal] = useState(0);
  const [questions, setQuestions] = useState(location.state);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [countWrongAnswer, setCountWrongAnswer] = useState(0);

  console.log(questions);
  const [playSound] = useSound(sound);
  const calcPoints = (points) => {
    setTotal((current) => current + points);
    localStorage.setItem("total", total + points);
  };

  const nextQuestion = () => {
    setQuestionIndex((current) => current + 1);
    setIsPressed(false);
    setTotal(0);
    setCountWrongAnswer(0);
    localStorage.setItem("questionIndex", questionIndex + 1);
    localStorage.removeItem("total");
  };

  const keyPressFct = (e) => {
    if (e.key === "Escape") {
      setIsPressed(true);
      playSound();
      setCountWrongAnswer((current) => current + 1);
    }
    setTimeout(() => setIsPressed(false), 1000);
  };

  useEffect(() => {
    const totalData = window.localStorage.getItem("total");
    const questionIndexData = window.localStorage.getItem("questionIndex");
    if (totalData !== null) {
      setTotal(+totalData);
    }
    if (questionIndexData !== null) {
      setQuestionIndex(+questionIndexData);
    }
  }, []);

  return (
    <div className="game-screen" onKeyDown={keyPressFct} tabIndex={-1}>
      <Header total={total} />
      <Board
        questionIndex={questionIndex}
        question={questions[questionIndex]}
        calcPoints={calcPoints}
      ></Board>
      {isPressed && <WrongAnswer count={countWrongAnswer} />}
      <Footer
        isLastRound={questionIndex === questions.length - 1 ? true : false}
        nextQuestion={nextQuestion}
        countWrongAnswer={countWrongAnswer}
      ></Footer>
    </div>
  );
};

export default GameScreen;
