import React from 'react';

import AppHeading from '../AppHeading/AppHeading';
import CalculatedDisplay from '../CalculatedDisplay/CalculatedDisplay';

import './header.styles.css';


const Header = () => {

    return (
        <header className="header">
            <div className="heading">
                <AppHeading heading="REACT BUDGETY APP" />
                <div className="truths">
                    <CalculatedDisplay 
                        providedClass="available__income" 
                        categoryName="Available Income:"
                        amount={123400}
                        pClass="percentage__item-expensetop" 
                        percentage={14} 
                    />
                    <CalculatedDisplay 
                    providedClass="total__income" 
                    categoryName="Total Income:"
                    amount={123400}
                    />
                    <CalculatedDisplay 
                    providedClass="total__expense" 
                    categoryName="Total Expense:"
                    amount={123400}
                    pClass="percentage__item-expensetop" 
                    percentage={14} 
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;