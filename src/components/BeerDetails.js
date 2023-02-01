import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import axios from "axios";

function BeerDetails() {
  const [singleBeer, setSingleBeer] = useState(null);
  const { id } = useParams();
  

  useEffect(() => {
    async function getSingleBeer() {
      const singleBeer = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      setSingleBeer(singleBeer.data)
    }
    getSingleBeer()
  }, [id])

  if (!singleBeer) return <p>Beer not found!</p>;
  return (
    <div key={singleBeer._id} style={{ marginTop: "50px" }}>
        <Header/>
      <img src={singleBeer.image_url} height="400px" alt={singleBeer.name} />
      <h3>{singleBeer.name}</h3>
      <p>{singleBeer.tagline}</p>
      <p>{singleBeer.first_brewed}</p>
      <p>{singleBeer.attenuation_level}</p>
      <p>{singleBeer.description}</p>
      <p>{singleBeer.contributed_by}</p>
      <Link to="/beers">Back</Link>
    </div>
  );
}
export default BeerDetails;



