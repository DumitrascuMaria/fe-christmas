import React from "react";
import Button from "../../Stories/Button";
import "./index.scss";

const Footer = ({ nextQuestion }) => {
  return (
    <div className="footer">
      <Button text="Next Round" handleClick={nextQuestion}></Button>
    </div>
  );
};

export default Footer;
