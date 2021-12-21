import React from 'react';

import './InsertionBar.styles.css';

const InsertionBar = ({children}) => {

    return (
        <div className="insertion__bar">
            {children}
        </div>
    )
}

export default InsertionBar;