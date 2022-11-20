import React, { useEffect, useState } from "react";
import "./index.scss";
const Card = ({ answear, index, calcPoints }) => {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    setIsShown(false);
  }, [answear]);

  return (
    <div className="card" onClick={() => setIsShown(true)}>
      {isShown ? (
        <div className="revealed-card">
          <div className="answear">{answear.text}</div>
          <div className="points" onClick={() => calcPoints(answear.points)}>
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
