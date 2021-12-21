import React from 'react';

import ExpenseItem from '../ExpenseItem/ExpenseItem';

import './ExpenseLayout.styles.css';

const ExpenseLayout = () => {

    return(
        <div className="expense">
            <h3 className="expense__heading">Expenses</h3>
            <ul className="expense__parent">
                <ExpenseItem description="i am expense item" amount={123212} percentage={22} />
            </ul>
        </div>
    )
}

export default ExpenseLayout;