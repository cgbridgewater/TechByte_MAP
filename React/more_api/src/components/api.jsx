import { useState, useEffect } from "react";


const Example = (props) => {

    // empty array to hold the objects
    const [pokemon, setPokemon] = useState([]);


    // runs when JSX is rendered
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            // return the data from response into a json format
            .then(response => response.json())
            // store json data in state to be displayed 
            .then(response => setPokemon(response.results))
    }, []);


    return (
        <ul>
            {
            pokemon.length > 0 && pokemon.map((pokeObj, index)=>{
                return (<li key={index}>{pokeObj.name}</li>)
            })
            }
        </ul>
    );
}
export default Example;

