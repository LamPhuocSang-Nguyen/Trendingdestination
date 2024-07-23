import 'bootstrap/dist/css/bootstrap.min.css';
import { listCateTour, listTour } from './data.js';
import React, {useState} from "react"
import Buttons from './components/buttons/Buttons.js';
import Cards from './components/cards/Cards.js';
import { Container } from 'reactstrap';
import './App.css';


function App() {
  
  const [city,setCity] = useState({ id: 1, title: "New York"})

  const handleClick = function(city){
    setCity(city)
  }
  return (
    <Container>
        <h2>Perfect destination</h2>
        <h1>Trending destinations</h1>
        <Buttons listCateTour={listCateTour} handleClick={handleClick} city={city}/>
        <Cards listTour={listTour.filter((tour)=> tour.category === city.title)} />
    </Container>
  );
}

export default App;
