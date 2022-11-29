import React from "react";
import Button from "../../Stories/Button";
import "./index.scss";

const Footer = ({ isLastRound, nextQuestion, countWrongAnswer }) => {
  let tries = [];
  while (countWrongAnswer > 0) {
    tries.push(<div key={countWrongAnswer}>&#10060;</div>);
    countWrongAnswer--;
  }
  return (
    <div className="footer">
      <Button
        text={isLastRound ? "Last Round" : "Next Question"}
        handleClick={nextQuestion}
        isLastRound={isLastRound}
      ></Button>
      {tries.length !== 0 && <div className="wrong-tries">{tries}</div>}
    </div>
  );
};

export default Footer;
