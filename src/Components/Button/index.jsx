import React from 'react';
import './styles.scss'

const Button = ({buttonText}) => {

    const handleClick = () => {
        alert('You clicked me!');
    }
    return (
        <div>
            <button onClick={() => handleClick()} className="button">
                <p>{buttonText}</p>
            </button>
        </div>
    )
}

export default Button;