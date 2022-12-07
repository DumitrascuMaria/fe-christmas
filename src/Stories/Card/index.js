import React, { useEffect, useState } from "react";
import "./index.scss";
import useSound from "use-sound";
import sound from "../../utils/correct-answer.wav";

const Card = ({ answear, index, calcPoints }) => {
  const [isShown, setIsShown] = useState(false);
  //const [hasBorder, setHasBorder] = useState(false);
  const [playSound] = useSound(sound);

  useEffect(() => {
    const isRevealed = sessionStorage.getItem(`card-${index}`) || null;
    console.log(isRevealed);
    if (isRevealed !== null && isRevealed === "true") setIsShown(true);
    else setIsShown(false);
  }, [answear]);

  return (
    <div
      className={"card"}
      onClick={() => {
        if (isShown === false) playSound();
        setIsShown(true);
        sessionStorage.setItem(`card-${index}`, true);
      }}
    >
      {isShown ? (
        <div className="revealed-card">
          <div className="answear">{answear.text}</div>
          <div
            className="points"
            onClick={() => {
              calcPoints(answear.points);
            }}
          >
            {answear.points}
          </div>
        </div>
      ) : (
        <div className="hided-card">
          <div
            className="index"
            onClick={() => {
              calcPoints(answear.points);
            }}
          >
            {index + 1}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
