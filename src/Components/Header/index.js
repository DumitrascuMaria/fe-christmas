import React, { useEffect, useState } from "react";
import Team from "../../Stories/Team";
import "./index.scss";

const Header = ({ total }) => {
  const [pointsFirstTeam, setPointsFirstTeam] = useState(0);
  const [pointsSecondTeam, setPointsSecondTeam] = useState(0);
  const increasePointsOne = () => {
    setPointsFirstTeam((current) => current + total);
    localStorage.setItem("points-team1", pointsFirstTeam + total);
  };
  const increasePointsTwo = () => {
    setPointsSecondTeam((current) => current + total);
    localStorage.setItem("points-team2", pointsSecondTeam + total);
  };

  useEffect(() => {
    const pointsTeam1 = window.localStorage.getItem("points-team1");
    if (pointsTeam1 !== null) {
      setPointsFirstTeam(+pointsTeam1);
    }
    const pointsTeam2 = window.localStorage.getItem("points-team2");
    if (pointsTeam2 !== null) {
      setPointsSecondTeam(+pointsTeam2);
    }
  }, []);
  return (
    <div className="header">
      <Team
        total={total}
        points={pointsFirstTeam}
        onClick={increasePointsOne}
      ></Team>
      <button className="current-points">{total}</button>
      <Team
        total={total}
        points={pointsSecondTeam}
        onClick={increasePointsTwo}
      ></Team>
    </div>
  );
};

export default Header;
