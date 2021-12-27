import React, { useState, useContext } from "react";
import Context from "../../context/BudgetContext";
import Pencil from "../icons/Pencil";
import Trash from "../icons/Trash";

import "./IncomeItem.styles.css";

const IncomeItem = ({ description, amount, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState(amount);
  const context = useContext(Context);

  const handleSubmit = (event) => {
    event.preventDefault();
    context.updateIncome(id, inputText);
    setIsEditing(false);
  };

  const handleChange = (event) => {
    if (isNaN(event.target.value)) return;
    setInputText(event.target.value);
  };

  const editIncome = (
    <li className="income__item">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="inputText"
          value={inputText}
          onChange={handleChange}
        />
        <input
          className="update__button update__button--income"
          type="submit"
          value="update"
        />
      </form>
    </li>
  );

  const incomeItem = (
    <li className="income__item">
      {description}
      <div className="income__icons">
        <span className="income__amount">{amount}</span>
        <Pencil onClick={() => setIsEditing(true)} />
        <Trash onClick={() => context.deleteItem(id, "incomes")} />
      </div>
    </li>
  );

  return isEditing ? editIncome : incomeItem;
};

export default IncomeItem;
