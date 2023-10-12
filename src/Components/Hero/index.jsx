import React from 'react';
import Button from '../Button/index';
import './styles.scss';

const Hero = ({returnedData}) => {
    return (
        <div className="container">
            <div className="imageContainer">
                <img className="heroImage" src={returnedData?.imgSrc} alt={returnedData?.imgAlt}/>
            </div>
            <div className="textContainer">
                <h3 className="header">{returnedData?.headerText}</h3>
                <p className="bodyText">{returnedData?.bodyText}</p>
                <Button buttonText="Contact Us"/>
            </div>
        </div>
    )
}

export default Hero;