import { Link } from "react-router-dom";
import Header from "./Header";


function Beers(props) {


  return (

    <div>
        <Header/>

        {props.beers.map((beer) => {
            return (
                <div>
                <img src={beer.image_url} alt={beer.name}/>
                <h3>{beer.name}</h3>
                <h4>{beer.tagline}</h4>
                <p>Created by:{beer.contributed_by}</p>
                <Link to={`/beers/${beer._id}`}>Details</Link>
                </div>
            )
        })}
      
    </div>
  )
}

export default Beers