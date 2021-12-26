import React, { Component } from "react";

import Header from "../Header/Header";
import InsertionBar from "../InsertionBar/InsertionBar";
import IncomeLayout from "../IncomeLayout/IncomeLayout";
import ExpenseLayout from "../ExpenseLayout/ExpenseLayout";

import { BudgetStore } from "../../context/BudgetContext";

import "./app.styles.css";

class App extends Component {
  render() {
    return (
      <BudgetStore>
        <main className="main">
          <Header />

          <InsertionBar />

          <IncomeLayout />
          <ExpenseLayout />
        </main>
      </BudgetStore>
    );
  }
}

export default App;
