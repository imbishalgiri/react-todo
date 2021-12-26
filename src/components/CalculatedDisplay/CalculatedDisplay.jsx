import React from "react";

import Percentbox from "../Percentbox/Percentbox";

import "./CalculatedDisplay.styles.css";

const CalculatedDisplay = ({
  providedClass,
  categoryName,
  amount,
  pClass,
  percentage,
}) => {
  const percentageSpan = percentage ? (
    <Percentbox providedClass={pClass} providedValue={percentage} />
  ) : null;

  return (
    <div className={`truths__item ${providedClass}`}>
      <strong>{categoryName}</strong>
      {amount}
      {percentageSpan}
    </div>
  );
};

export default CalculatedDisplay;

{
  /* <CalculatedDisplay 
    providedClass="available__income" 
    categoryName="Available Income:"
    amount={123400}
    pClass="percentage__item-expensetop" 
    percentage={14} 
/>    */
}
