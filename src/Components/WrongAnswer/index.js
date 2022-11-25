import React, { useState } from "react";
import useSound from "use-sound";
import sound from "../../utils/buzzer.wav";

import "./index.scss";
const WrongAnswer = () => {
  const [playSound] = useSound(sound);
  console.log("modal");
  const [secondIsActive, setSecondIsActive] = useState(false);
  const [lastIsActive, setLastIsActive] = useState(false);

  return (
    <div className="modal-wrapper" id="modal" onClick={() => playSound()}>
      <div className="modal-body">
        <h1>X</h1>
        <h1>X</h1>
        <h1>X</h1>
      </div>
      {/* <h1 className="active">X</h1>

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
      </h1> */}
    </div>
  );
};

export default WrongAnswer;
