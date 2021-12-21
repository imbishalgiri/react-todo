import React from 'react';

import './Percentbox.styles.css';

const Percentbox = ({ providedClass, providedValue }) => (
    <span className = {providedClass}> {providedValue + '%'} </span>   
)

export default Percentbox;