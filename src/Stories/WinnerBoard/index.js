import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import "./index.scss";

export const WinnerBoard = () => {
  const [winnerTeam, setWinnerTeam] = useState("");
  useEffect(() => {
    const pointsTeam1 = window.sessionStorage.getItem("points-team1");
    const pointsTeam2 = window.sessionStorage.getItem("points-team2");
    if (pointsTeam1 !== null && pointsTeam2 !== null) {
      if (+pointsTeam1 > +pointsTeam2) setWinnerTeam("Code Warriors");
      else if (+pointsTeam1 < +pointsTeam2) setWinnerTeam("Ctrl Alt Defeat");
      else setWinnerTeam("Everybody");
    } else {
      setWinnerTeam("Everybody");
    }
  }, []);
  return (
    <div className="winner-board">
      <h1>The winner is </h1>
      <h1>
        &#11088;{winnerTeam}
        &#11088;
      </h1>
      <p>Thank you for playing!</p>
      <Confetti numberOfPieces={500} width={2000} height={2000} />
    </div>
  );
};
