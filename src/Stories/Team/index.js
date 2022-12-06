import React from "react";
import useSound from "use-sound";
import sound from "../../utils/increase-points.wav";
import "./index.scss";

const Team = ({ onClick, points, name }) => {
  const [playSound] = useSound(sound);

  return (
    <div
      className="team"
      onClick={() => {
        onClick();
        playSound();
      }}
    >
      <div className="team-name">{name}</div>
      <div className="team-points">{points}</div>
    </div>
  );
};

export default Team;
