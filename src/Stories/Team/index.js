import React, { useState } from "react";
import useSound from "use-sound";
import sound from "../../utils/increase-points.wav";
import "./index.scss";

const Team = ({ total }) => {
  const [points, setPoints] = useState(0);
  const [playSound] = useSound(sound);
  console.log("totaaal", total);
  return (
    <div
      className="team"
      onClick={() => {
        setPoints((current) => current + total);
        playSound();
      }}
    >
      <div className="team-name">Team name</div>
      <div className="team-points">{points}</div>
    </div>
  );
};

export default Team;
