import React from 'react';

import IncomeItem from '../IncomeItem/IncomeItem';

import './IncomeLayout.styles.css';

const IncomeLayout = () => {
    
    return(
        <div className="income">
            <h3 className="income__heading">Incomes</h3>
            <ul className="income__parent">
                <IncomeItem description="I am income amount" amount={1234334} />
                <IncomeItem description="I am income amount" amount={1234334} />
            </ul>
        </div>
    )
}

export default IncomeLayout;