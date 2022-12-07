import React, { useEffect, useState } from "react";
import WrongAnswer from "../../Components/WrongAnswer";
import Board from "../../Components/Board";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import useSound from "use-sound";
import sound from "../../utils/buzzer.wav";
import "./index.scss";
import { useLocation } from "react-router-dom";
import { WinnerBoard } from "../../Stories/WinnerBoard";

const GameScreen = () => {
  const location = useLocation();
  const [total, setTotal] = useState(0);
  const [questions, setQuestions] = useState(location.state);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [countWrongAnswer, setCountWrongAnswer] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  console.log(questions);
  const [playSound] = useSound(sound);
  const calcPoints = (points) => {
    setTotal((current) => current + points);
    sessionStorage.setItem("total", total + points);
  };

  const clearSession = () => {
    sessionStorage.setItem("questionIndex", questionIndex + 1);
    sessionStorage.removeItem("total");
    sessionStorage.removeItem("wrongAnswers");
    for (let i = 0; i < questions[questionIndex].answears.length; i++) {
      sessionStorage.removeItem(`card-${i}`);
    }
    sessionStorage.removeItem("showQuestion");
  };

  const nextQuestion = () => {
    setQuestionIndex((current) => current + 1);
    setIsPressed(false);
    setTotal(0);
    setCountWrongAnswer(0);
    clearSession();
  };

  const keyPressFct = (e) => {
    if (e.key === "Escape") {
      setIsPressed(true);
      playSound();
      setCountWrongAnswer((current) => current + 1);
      sessionStorage.setItem("wrongAnswers", countWrongAnswer + 1);
    }
    setTimeout(() => setIsPressed(false), 1000);
  };

  useEffect(() => {
    const totalData = window.sessionStorage.getItem("total") || null;
    const questionIndexData =
      window.sessionStorage.getItem("questionIndex") || null;
    const wrongAnswers = window.sessionStorage.getItem("wrongAnswers") || null;
    if (totalData !== null) {
      setTotal(+totalData);
    }
    if (questionIndexData !== null) {
      setQuestionIndex(+questionIndexData);
    }
    if (wrongAnswers !== null) {
      setCountWrongAnswer(+wrongAnswers);
    }
  }, []);

  const isLastRound = questionIndex === questions.length - 1 ? true : false;

  return (
    <div className="game-screen" onKeyDown={keyPressFct} tabIndex={-1}>
      <Header total={total} />
      {isFinished ? (
        <WinnerBoard></WinnerBoard>
      ) : (
        <>
          <Board
            questionIndex={questionIndex}
            question={questions[questionIndex]}
            calcPoints={calcPoints}
          ></Board>

          <Footer
            isLastRound={isLastRound}
            nextQuestion={
              isLastRound ? () => setIsFinished(true) : nextQuestion
            }
            countWrongAnswer={countWrongAnswer}
          ></Footer>
        </>
      )}
      {isPressed && <WrongAnswer count={countWrongAnswer} />}
    </div>
  );
};

export default GameScreen;
