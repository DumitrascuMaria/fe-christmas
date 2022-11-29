import React, { useState, useEffect } from "react";
import WrongAnswer from "../../Components/WrongAnswer";
import Board from "../../Components/Board";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import useSound from "use-sound";
import sound from "../../utils/buzzer.wav";
import "./index.scss";
import { questions } from "../../utils/questions";

const GameScreen = () => {
  const [total, setTotal] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [countWrongAnswer, setCountWrongAnswer] = useState(0);

  const [playSound] = useSound(sound);
  const calcPoints = (points) => {
    setTotal((current) => current + points);
  };

  const nextQuestion = () => {
    setQuestionIndex((current) => current + 1);
    setIsPressed(false);
    setTotal(0);
    setCountWrongAnswer(0);
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
    document.addEventListener("keydown", keyPressFct);

    return () => {
      document.removeEventListener("keydown", keyPressFct);
    };
  }, [keyPressFct]);

  return (
    <div className="game-screen">
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
