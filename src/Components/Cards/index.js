import React from "react";
import Card from "../../Stories/Card";
import "./index.scss";

const Cards = ({ answears, calcPoints }) => {
  let firstColumn = [];
  let secondColumn = [];

  for (let i = 0; i < answears.length; i++) {
    if (i < 4) {
      firstColumn.push(
        <Card
          key={i}
          answear={answears[i]}
          index={i}
          calcPoints={calcPoints}
        ></Card>
      );
    } else
      secondColumn.push(
        <Card
          key={i}
          answear={answears[i]}
          index={i}
          calcPoints={calcPoints}
        ></Card>
      );
  }

  return (
    <div id="cards" className="cards-container">
      <div className="column">{firstColumn}</div>

      <div className="column">{secondColumn}</div>
    </div>
  );
};

export default Cards;
