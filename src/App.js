import './App.css';
import {Route, Routes} from "react-router-dom"
import HomePage from './components/HomePage';
import Beers from './components/Beers';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';


function App() {

  const [beers, setBeers] = useState([])
  const [randomBeer, setRandomBeer] = useState(null)
  


    useEffect(() => {
        async function getBeers() {
          const beers = await axios.get(
            'https://ih-beers-api2.herokuapp.com/beers/'
          );
          const randomBeer = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
          

          setBeers(beers.data);
          setRandomBeer(randomBeer.data)
        }
        getBeers();
      }, []);

      
  function addBeer(newBeer) {
    setBeers(beers.concat(newBeer))
  }


  return (
    <div className="App">
    <Routes>
    <Route path="/" element= {<HomePage/>} />
    <Route path="/beers" element= {<Beers beers={beers}/>} />
    <Route path="/beers/:id" element= {<BeerDetails/>} />
    <Route path="/random-beer" element= {<RandomBeer randomBeer={randomBeer}/>} />
    <Route path="/new-beer" element= {<NewBeer addBeer={addBeer}/>} />

    </Routes>
      
    </div>
  );
}

export default App;
