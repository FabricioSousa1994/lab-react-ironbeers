import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "./Header"

function RandomBeer(props) {

    
    /* function getRandom() {
        const random = Math.floor(Math.random() * props.beers.length);
        const randomBeer = props.beers[random];
        return setRandomBeer(prevState => ([... prevState, randomBeer ]));
      } */
    

  return (
    
    <div key={props.randomBeer._id} style={{ marginTop: "50px" }}>
        <Header/>
      <img src={props.randomBeer.image_url} height="400px" alt={props.randomBeer.name} />
      <h3>{props.randomBeer.name}</h3>
      <p>{props.randomBeer.tagline}</p>
      <p>{props.randomBeer.first_brewed}</p>
      <p>{props.randomBeer.attenuation_level}</p>
      <p>{props.randomBeer.description}</p>
      <p>{props.randomBeer.contributed_by}</p>
      <Link to="/beers">Back</Link>
    </div>
  )
}

export default RandomBeer