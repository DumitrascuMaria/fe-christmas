import React, { useState } from "react";
import useAudio from "../../hooks/useAudio";
import "./index.scss";
const WrongAnswer = () => {
  const [playing, toggle] = useAudio("src/utils/censor.mp3"); //Uncaught (in promise) DOMException: The element has no supported sources. :(

  const [secondIsActive, setSecondIsActive] = useState(false);
  const [lastIsActive, setLastIsActive] = useState(false);
  
  return (
    <div className="wrongAnswer" onClick={toggle}>
      <h1 className="active">X</h1>

      <h1
        className={secondIsActive ? "active" : ""}
        onClick={() => setSecondIsActive(true)}
      >
        X
      </h1>
      <h1
        className={lastIsActive ? "active" : ""}
        onClick={() => setLastIsActive(true)}
      >
        X
      </h1>
    </div>
  );
};

export default WrongAnswer;
