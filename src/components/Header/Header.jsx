import React, { useContext } from "react";

import BudgetContext from "../../context/BudgetContext";

import AppHeading from "../AppHeading/AppHeading";
import CalculatedDisplay from "../CalculatedDisplay/CalculatedDisplay";

import "./header.styles.css";

const calculateTotal = (item) => {
  return item.reduce(
    (previous, current) => previous + parseInt(current.amount),
    0
  );
};

const Header = () => {
  const context = useContext(BudgetContext);

  const totalIncome = calculateTotal(context.incomes);

  const totalExpense = calculateTotal(context.expenses);
  const availableIncome = totalIncome - totalExpense;

  const availableIncomePercentage =
    ((availableIncome * 100) / totalIncome).toFixed(2) * 1;
  const totalExpensePercentage =
    ((totalExpense * 100) / totalIncome).toFixed(2) * 1;
  return (
    <header className="header">
      <div className="heading">
        <AppHeading heading="REACT BUDGETY APP" />
        <div className="truths">
          <CalculatedDisplay
            providedClass="available__income"
            categoryName="Available Income:"
            amount={availableIncome}
            pClass="percentage__item-expensetop"
            percentage={availableIncomePercentage}
          />
          <CalculatedDisplay
            providedClass="total__income"
            categoryName="Total Income:"
            amount={totalIncome}
          />
          <CalculatedDisplay
            providedClass="total__expense"
            categoryName="Total Expense:"
            amount={totalExpense}
            pClass="percentage__item-expensetop"
            percentage={totalExpensePercentage}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
