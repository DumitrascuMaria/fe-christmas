import React from "react";
import Button from "../../Stories/Button";
import "./index.scss";

const Footer = ({ nextQuestion, countWrongAnswer }) => {
  // let tries = []
  // while(countWrongAnswer > 0) {

  // }
  return (
    <div className="footer">
      <Button text="Next Round" handleClick={nextQuestion}></Button>
      {countWrongAnswer !== 0 && (
        <p>Nr. Raspunsuri gresite: {countWrongAnswer}</p>
      )}
    </div>
  );
};

export default Footer;
