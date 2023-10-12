import React from 'react';
import Button from '../Button/index';
import CardImage from '../CardImage/index';
import CardHeader from '../CardHeader/index';
import CardBody from '../CardBody/index';
import './styles.scss';

const Card = ({ selected, onClick, imgSrc, imgAlt, headerText, paragraphText, buttonText}) => {
    return (
        <div 
        className={`${selected ? 'cardContainerSelected' : 'cardContainer'}`}
        onClick={onClick}
        >
            <CardImage imgSrc={imgSrc} imgAlt={imgAlt} />
            <CardHeader headerText={headerText} /> 
            <CardBody paragraphText={paragraphText} />
            <Button buttonText={buttonText}/>
        </div>
    )
}

export default Card;