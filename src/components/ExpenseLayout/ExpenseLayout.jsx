import React, { Component } from "react";

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import BudgetContext from "../../context/BudgetContext";

import "./ExpenseLayout.styles.css";

class ExpenseLayout extends Component {
  static contextType = BudgetContext;

  expenseItems = () =>
    this.context.expenses.map(({ description, amount, id }) => (
      <ExpenseItem key={id} id={id} description={description} amount={amount} />
    ));

  render() {
    return (
      <div className="expense">
        <h3 className="expense__heading">Expenses</h3>
        <ul className="expense__parent">{this.expenseItems()}</ul>
      </div>
    );
  }
}

export default ExpenseLayout;
