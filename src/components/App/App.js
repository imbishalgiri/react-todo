import React, { Component } from 'react';

import Header from '../Header/Header';
import InsertionBar from '../InsertionBar/InsertionBar';
import IncomeLayout from '../IncomeLayout/IncomeLayout';
import ExpenseLayout from '../ExpenseLayout/ExpenseLayout';

// inner Components
import CategoryToggle from '../CategoryToggle/CategoryToggle';
import Description from '../Description/Description';
import Amount from '../Amount/Amount';


import './app.styles.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isIncome: true,
            availableIncome: [{amount: 0, percentage: 0}],
            totalIncome: 0,
            totalExpense: [{amount: 0, percentage: 0}],
            incomeItems: [
                {description: "I am income Item", value: 1200}
            ],
            expenseItems: [
                {description: "I am expense Item", value: 1300, percentage: 21}
            ]
        }
    }

    render() {
        console.table(this.state);
        return (
            <main className="main">            
              <Header />

              <InsertionBar>
                <CategoryToggle setCategory={(category) => this.setState({isIncome: category})}/>
                <Description />
                <Amount />
              </InsertionBar>

              <IncomeLayout />
              <ExpenseLayout />
            </main>
        )
    }
}

export default App;

