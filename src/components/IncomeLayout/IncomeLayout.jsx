import React, { Component } from "react";

import IncomeItem from "../IncomeItem/IncomeItem";
import BudgetContext from "../../context/BudgetContext";

import "./IncomeLayout.styles.css";

class IncomeLayout extends Component {
  static contextType = BudgetContext;

  incomeItems = () =>
    this.context.incomes.map(({ description, amount, id }) => {
      return (
        <IncomeItem
          description={description}
          amount={amount}
          key={id}
          id={id}
        />
      );
    });

  render() {
    return (
      <div className="income">
        <h3 className="income__heading">Incomes</h3>
        <ul className="income__parent">{this.incomeItems()}</ul>
      </div>
    );
  }
}

export default IncomeLayout;
