import React from "react";
import "./index.scss";

const Question = ({ title }) => {
  return (
    <div className="question">
      <span>{title}</span>
    </div>
  );
};

export default Question;
