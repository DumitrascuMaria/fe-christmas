import React from "react";

import "./index.scss";
const WrongAnswer = ({ count }) => {
  let tries = [];
  while (count > 0) {
    tries.push(<div key={count}>&#10060;</div>);
    count--;
  }
  return (
    <div className="modal-wrapper" id="modal">
      <div className="modal-body">
        {tries}
      </div>
    </div>
  );
};

export default WrongAnswer;
