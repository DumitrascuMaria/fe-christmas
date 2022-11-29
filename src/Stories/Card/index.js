import React, { useEffect, useState } from "react";
import "./index.scss";
import useSound from "use-sound";
import sound from "../../utils/correct-answer.wav";

const Card = ({ answear, index, calcPoints }) => {
  const [isShown, setIsShown] = useState(false);
  const [hasBorder, setHasBorder] = useState(false);
  const [playSound] = useSound(sound);

  useEffect(() => {
    setIsShown(false);
    setHasBorder(false);
  }, [answear]);

  return (
    <div
      className={hasBorder ? "card-border" : "card"}
      onClick={() => {
        if (!isShown) {
          setTimeout(() => {
            setHasBorder(true);
          }, 5000);
        }
        if (isShown === false) playSound();
        setIsShown(true);
      }}
    >
      {isShown ? (
        <div className="revealed-card">
          <div className="answear">{answear.text}</div>
          <div
            className="points"
            onClick={() => {
              calcPoints(answear.points);
              setHasBorder(false);
            }}
          >
            {answear.points}
          </div>
        </div>
      ) : (
        <div className="hided-card">
          <div className="index">{index + 1}</div>
        </div>
      )}
    </div>
  );
};

export default Card;
