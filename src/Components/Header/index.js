import React from "react";
import Team from "../../Stories/Team";
import "./index.scss";

const Header = ({ total }) => {
  return (
    <div className="header">
      <Team total={total}></Team>
      <button className="current-points">{total}</button>
      <Team total={total}></Team>
    </div>
  );
};

export default Header;
