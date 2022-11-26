import React, { useState } from "react";

import "./index.scss";
const WrongAnswer = ({ count }) => {
  return (
    <div className="modal-wrapper" id="modal">
      <div className="modal-body">
        {count === 1 ? (
          <div>&#10060;</div>
        ) : count === 2 ? (
          <>
            <div>&#10060;</div> <div>&#10060;</div>
          </>
        ) : count === 3 ? (
          <>
            <div>&#10060;</div> <div>&#10060;</div> <div>&#10060;</div>
          </>
        ) : (
          ""
        )}
        {/* <h1>X</h1>
        <h1>X</h1> */}
        {/* <h1>X</h1> */}
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
