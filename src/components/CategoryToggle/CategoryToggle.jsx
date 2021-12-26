import React, { Component } from "react";
import BudgetContext from "../../context/BudgetContext";

import "./CategoryToggle.styles.css";

class CategoryToggle extends Component {
  static contextType = BudgetContext;

  incomeDisplay = () => (
    <div className="category">
      <div className="category__item">Income</div>
      <div
        className="category__icon icon icon-circle-up"
        onClick={() => this.context.setType("expenses")}
      ></div>
    </div>
  );

  expenseDisplay = () => (
    <div className="category">
      <div className="category__item--expense">Expense</div>
      <div
        className="category__icon--expense icon icon-circle-up"
        onClick={() => this.context.setType("incomes")}
      ></div>
    </div>
  );

  render() {
    console.log(this.context.incomes);
    console.log(this.context.expenses);
    const income = this.incomeDisplay();
    const expense = this.expenseDisplay();

    return this.context.type === "incomes" ? income : expense;
  }
}

export default CategoryToggle;
