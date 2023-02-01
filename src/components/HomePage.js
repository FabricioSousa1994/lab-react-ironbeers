import { Link } from "react-router-dom"
import Beers from "./Beers"

function HomePage() {
  return (
    <div>HomePage
    <ul>
    <li>
    <Link to="/beers">All Beers</Link>  
    </li>
    <li>
    <Link to="/random-beer">Random Beer</Link>
    </li>
    <li>
    <Link to="/new-beer">New Beer</Link>
    </li>
    </ul>
    </div>
  )
}

export default HomePage