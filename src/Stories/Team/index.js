import React, { useState } from "react";
import "./index.scss";

const Team = ({ total }) => {
  const [points, setPoints] = useState(0);
  console.log("totaaal", total);
  return (
    <div
      className="team"
      onClick={() => setPoints((current) => current + total)}
    >
      <div className="team-name">Team name</div>
      <div className="team-points">{points}</div>
    </div>
  );
};

export default Team;
