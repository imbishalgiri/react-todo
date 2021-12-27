import React, { Component } from "react";

const Context = React.createContext("");

export class BudgetStore extends Component {
  state = {
    id: 1,
    type: "incomes",
    description: "",
    amount: "",
    incomes: [],
    expenses: [],
  };

  addValue = () => {
    const { type, description, amount, incomes, expenses } = this.state;
    if (!type || !description || !amount) {
      return;
    }
    const newValue = {
      id: this.state.id + 1,
      description: description,
      amount: amount,
    };
    switch (type) {
      case "expenses":
        this.setState({
          id: newValue.id,
          [type]: [...expenses, newValue],
        });
        break;

      default:
        this.setState({
          id: newValue.id,
          [type]: [...incomes, newValue],
        });
        break;
    }
  };

  setType = (type) => {
    this.setState({ type: type.toLowerCase() });
  };

  setDescription = (description) => {
    this.setState({ description: description.toLowerCase() });
  };

  setAmount = (amount) => {
    this.setState({ amount });
  };

  clearPage = () => {
    this.setState({
      description: "",
      amount: "",
    });
  };

  updateIncome = (id, value) => {
    const incomes = [...this.state.incomes];
    let incomeToBeUpdated = incomes.find((income) => income.id === id);
    incomeToBeUpdated.amount = value;
    this.setState({ incomes });
  };

  updateExpense = (id, value) => {
    const expenses = [...this.state.expenses];
    let expenseToBeUpdated = expenses.find((expense) => expense.id === id);
    expenseToBeUpdated.amount = value;
    console.log(id, value);
    this.setState({ expenses });
  };

  deleteItem = (id, type) => {
    const deleteables = [...this.state[type]];
    let itemToBeDeleted = deleteables.find((item) => item.id === id);
    const newItems = deleteables.filter(
      (income) => income.id !== itemToBeDeleted.id
    );
    console.log("triggered");
    this.setState({ [type]: newItems });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          addValue: this.addValue,
          setType: this.setType,
          setDescription: this.setDescription,
          setAmount: this.setAmount,
          clearPage: this.clearPage,
          updateIncome: this.updateIncome,
          updateExpense: this.updateExpense,
          deleteItem: this.deleteItem,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
