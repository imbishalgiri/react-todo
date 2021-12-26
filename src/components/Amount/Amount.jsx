import React, { Component } from "react";
import BudgetContext from "../../context/BudgetContext";
import "./amount.styles.css";

class Amount extends Component {
  static contextType = BudgetContext;

  handleChange = (event) => {
    if (isNaN(event.target.value)) {
      return;
    }
    this.context.setAmount(event.target.value);
  };

  handleClick = () => {
    this.context.addValue();
    this.context.clearPage();
  };

  handleEnter = (event) => {
    if (event.key === "Enter") {
      this.context.addValue();
      this.context.clearPage();
    }
  };

  render() {
    return (
      <div className="amount">
        <input
          type="text"
          className="amount__money"
          placeholder="amount"
          onChange={this.handleChange}
          value={this.context.amount}
          onKeyDown={this.handleEnter}
        />
        <span
          className="amount__icon icon icon-checkmark"
          onClick={this.handleClick}
        ></span>
      </div>
    );
  }
}

export default Amount;
