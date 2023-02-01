import { Link } from "react-router-dom"
import home from "../home.png"
function Header() {
  return (
    <div>
        <Link to="/" >
        <img src={home} alt="home-img"/>   
        </Link>  

    </div>
  )
}

export default Header