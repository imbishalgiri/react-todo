import React, { useState, useContext } from "react";
import Pencil from "../icons/Pencil";
import Trash from "../icons/Trash";
import Percentbox from "../Percentbox/Percentbox";

import BudgetContext from "../../context/BudgetContext";

import "./ExpenseItem.styles.css";

const ExpenseItem = ({ id, description, amount }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState(amount);

  const context = useContext(BudgetContext);
  const totalIncome = context.incomes.reduce(
    (previous, current) => previous + parseInt(current.amount),
    0
  );
  let percentage = ((amount * 100) / totalIncome).toFixed(2);

  const handleSubmit = (event) => {
    event.preventDefault();
    context.updateExpense(id, inputText);
    setIsEditing(false);
  };

  const handleChange = (event) => {
    if (isNaN(event.target.value)) return;
    setInputText(event.target.value);
  };

  // edit form that is displayed on clicking edit button
  const editExpense = (
    <li className="expense__item">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="inputText"
          value={inputText}
          onChange={handleChange}
        />
        <input className="update__button" type="submit" value="update" />
      </form>
    </li>
  );

  // main expense item list
  const expenseItem = (
    <li className="expense__item">
      {description}
      <div className="expense__icons">
        <div className="expense__amount">{amount}</div>
        <Percentbox
          providedClass="percentage__item-expense"
          providedValue={percentage}
        />
        <Pencil onClick={() => setIsEditing(true)} />
        <Trash itemId={id} />
      </div>
    </li>
  );

  return !isEditing ? expenseItem : editExpense;
};

export default ExpenseItem;
