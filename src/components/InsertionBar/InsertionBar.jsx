import React from "react";
import Amount from "../Amount/Amount";
import CategoryToggle from "../CategoryToggle/CategoryToggle";
import Description from "../Description/Description";

import "./InsertionBar.styles.css";

// <CategoryToggle setCategory={(category) => this.setState({ isIncome: category })} />

const InsertionBar = ({ children }) => {
  return (
    <div className="insertion__bar">
      <CategoryToggle />
      <Description />
      <Amount />
    </div>
  );
};

export default InsertionBar;
