import React from 'react';
import './styles.scss';
const CardHeader = ({headerText}) => {
    return (
        <div>
            <h1 className="cardHeader"> {headerText} </h1> 
        </div>
    )
}

export default CardHeader;