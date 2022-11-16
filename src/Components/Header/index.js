import React from "react";
import Team from "../../Stories/Team";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <Team></Team>
      <button className="current-points">Current Points</button>
      <Team></Team>
    </div>
  );
};

export default Header;
