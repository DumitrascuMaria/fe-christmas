import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import "./index.scss";

export const WinnerBoard = () => {
  const [winnerTeam, setWinnerTeam] = useState("");
  useEffect(() => {
    const pointsTeam1 = window.localStorage.getItem("points-team1");
    const pointsTeam2 = window.localStorage.getItem("points-team2");
    if (pointsTeam1 !== null && pointsTeam2 !== null) {
      if (+pointsTeam1 > +pointsTeam2) setWinnerTeam("The winner is team1");
      else setWinnerTeam("The Winner is team2");
    } else {
      setWinnerTeam(
        `The winner is ${pointsTeam1 !== null ? "team1" : "team2"}`
      );
    }
  }, []);
  return (
    <div className="winner-board">
      <h1>
        &#11088;{winnerTeam}
        &#11088;
      </h1>
      <p>Thank you for playing!</p>
      <Confetti numberOfPieces={500} width={2000} height={2000} />
    </div>
  );
};
