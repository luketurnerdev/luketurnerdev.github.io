import React, {useState} from 'react';
import Card from '../Card';
import './styles.scss'

const CardsContainer = ({returnedData}) => {

    // This should ideally be dynamic for multiple cards
    const [selectedCardList, setSelectedCardList] = useState([
        { title: 'Card 1', selected: false },
        { title: 'Card 2', selected: true }, 
        { title: 'Card 3', selected: false },
      ]);

      const handleClick = (index) => {
        // Update just the selected card, deselect the rest.
        const updatedCards = selectedCardList.map((card, i) => ({
          ...card,
          selected: i === index,
        }));
        setSelectedCardList(updatedCards);
      };

    return (
        <div className="cardsContainer">
        {
          returnedData && returnedData.map((card, index) => {
            return <Card
              key={index}
              selected={selectedCardList[index].selected}
              onClick={() => handleClick(index)}
              imgSrc={card.imgSrc}
              headerText={card.headerText}
              paragraphText={card.paragraphText}
              buttonText={card.buttonText}
            />
          })
  
        }
        </div>
    )
}

export default CardsContainer;