import React from "react";
import Board from "../../Components/Board";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "./index.scss";

const GameScreen = () => {
  return (
    <div className="game-screen">
      <Header />
      <Board></Board>
      <Footer></Footer>
    </div>
  );
};

export default GameScreen;
