import React from 'react';

import Pencil from '../icons/Pencil';
import Trash from '../icons/Trash';
import Percentbox from '../Percentbox/Percentbox';

import './ExpenseItem.styles.css';

const ExpenseItem = ({description, amount, percentage}) => {

    return (
        <li className="expense__item">
            {description}
            <div className="expense__icons">
                <div className="expense__amount">{amount}</div>
                <Percentbox providedClass="percentage__item-expense" providedValue={percentage} />
                <Pencil />
                <Trash />
            </div>
        </li>
    )
}

export default ExpenseItem;
