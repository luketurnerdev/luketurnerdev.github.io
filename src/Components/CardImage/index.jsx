import React from 'react';
import './styles.scss'

const CardImage = ({imgSrc, imgAltText}) => {
    return (
        <div>
            <img className="cardImage" src={imgSrc} alt={imgAltText}/>
        </div>
    )
}

export default CardImage;