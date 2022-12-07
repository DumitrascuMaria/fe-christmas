import React, { useEffect, useState } from "react";
import "./index.scss";

const Question = ({ title }) => {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    const showQuestion = sessionStorage.getItem("showQuestion");
    if (showQuestion !== null && showQuestion === "true") setShowText(true);
    else setShowText(false);
  }, [title]);
  return (
    <div
      className="question"
      onClick={() => {
        setShowText(true);
        sessionStorage.setItem("showQuestion", true);
      }}
    >
      {showText && <span>{title}</span>}
    </div>
  );
};

export default Question;
