import React,{Component} from 'react';

import './CategoryToggle.styles.css';

class CategoryToggle extends Component {

    constructor(props){
        super(props);
        this.state = {isIncome: true};
    }

    incomeDisplay = () => (
        <div className="category">
            <div className="category__item">Income</div>
            <div className="category__icon icon icon-circle-up" onClick={this.handleClick}></div>
        </div>
    )

    expenseDisplay = () => (
        <div className="category">
            <div className="category__item--expense">Expense</div>
            <div className="category__icon--expense icon icon-circle-up" onClick={this.handleClick}></div>
        </div>
    )

    handleClick = () => {
        this.setState({isIncome: !this.state.isIncome});
        this.props.setCategory(!this.state.isIncome); // because of the asynchronous behavior of this.setState above this line
    }

    render() {
        const income = this.incomeDisplay();
        const expense = this.expenseDisplay();

        return this.state.isIncome ? income : expense;
    }
}

export default CategoryToggle;
