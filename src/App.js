import './styles.scss';
import {useState, useEffect} from 'react';
import exampleData from "./ExampleData/index";
import Hero from "./Components/Hero";
import CardsContainer from './Components/CardsContainer';

function App() {

  const [returnedData, setReturnedData] = useState([]);

  // Fetch fake API data on page load
  useEffect(() => {
    setReturnedData(exampleData);
  }, []);

  return (
    <div className="App">
      <Hero returnedData={returnedData?.hero}/>
      <CardsContainer returnedData={returnedData?.cards} />
    </div>
  );
}

export default App;
