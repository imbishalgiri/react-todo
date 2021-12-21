import React from 'react';

import Pencil from '../icons/Pencil';
import Trash from '../icons/Trash';


import './IncomeItem.styles.css';

const IncomeItem = ({description, amount}) => {

    return (
        <li className="income__item">
            {description}
            <div className="income__icons">
                <span className="income__amount">{amount}</span>
                <Pencil />
                <Trash />
            </div>
        </li>
    )
}

export default IncomeItem;
