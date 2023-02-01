import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Header from "./Header";

function NewBeer(props) {

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirst_brewed] = useState("");
    const [brewers_tips, setBrewers_tips] = useState("");
    const [attenuation_level, setAttenuation_level] = useState(0);
    const [contributed_by, setContributed_by] = useState("");
    const navigate = useNavigate()

    function handleName(event) {
        setName(event.target.value);
    }
    function handleTagline(event) {
        setTagline(event.target.value);
    }
    function handleDescription(event) {
        setDescription(event.target.value);
    }
    function handleFirst_brewed(event) {
        setFirst_brewed(event.target.value);
    }
    function handleBrewers_tips(event) {
        setBrewers_tips(event.target.value);
    }
    function handleAttenuation_level(event) {
        setAttenuation_level(event.target.value);
    }
    function handleContributed_by(event) {
        setContributed_by(event.target.value);
    }


    async function handleSubmitForm(event) {
        event.preventDefault()
        const newBeer = {
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by
        }
        console.log(newBeer)
        await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer);

        props.addBeer(newBeer)

        setName("")
        setTagline("0")
        setDescription("")
        setFirst_brewed("")
        setBrewers_tips("")
        setAttenuation_level(0)
        setContributed_by("")
        navigate("/beers")
    }

  return (
    <div>
        <Header/>
        <form onSubmit={handleSubmitForm} >
        <label htmlFor="name">Name</label>
        <input onChange={handleName} id="name" type="text" name="name" value={name}/>

        <label htmlFor="tagline">Tagline</label>
        <input onChange={handleTagline} id="tagline" type="text" name="tagline" value={tagline}/>

        <label htmlFor="description">Description</label>
        <input onChange={handleDescription} id="description" type="text" name="description" value={description}/>

        <label htmlFor="first_brewed">First Brewed</label>
        <input onChange={handleFirst_brewed} id="first_brewed" type="text" name="first_brewed" value={first_brewed}/>

        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input onChange={handleBrewers_tips} id="brewers_tips" type="text" name="brewers_tips" value={brewers_tips}/>

        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input onChange={handleAttenuation_level} id="attenuation_level" type="number" name="attenuation_level" value={attenuation_level}/>

        <label htmlFor="contributed_by">Contributed By</label>
        <input onChange={handleContributed_by} id="contributed_by" type="text" name="contributed_by" value={contributed_by}/>

        <button type="submit">Create</button>
    </form>

    </div>
  )
}

export default NewBeer