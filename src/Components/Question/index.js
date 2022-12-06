import React, { useEffect, useState } from "react";
import "./index.scss";

const Question = ({ title }) => {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    setShowText(false);
  }, [title]);
  return (
    <div className="question" onClick={() => setShowText(true)}>
      {showText && <span>{title}</span>}
    </div>
  );
};

export default Question;
