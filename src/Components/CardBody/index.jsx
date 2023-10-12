import React from 'react';
import './styles.scss';

const CardBody = ({paragraphText}) => {
    return (
        <div className="bodyContainer">
            <p className="paragraphText" dangerouslySetInnerHTML={{ __html: paragraphText }} />
        </div>
    )
}

export default CardBody;