import axios from "axios";
import React, { useEffect, useState } from "react";

const GetPokemon = (props) => {

    const [ pokemon, setPokemon ] = useState(null);

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(res => {
                console.log(res.data.results);
                setPokemon(res.data.results);
            })
            .catch((err) => console.log(err));
    }, []); 

    return (
        <div className="Pokemon">
            <h1>'Fetch' Pokemons With Axios</h1>
            <p>
                {
                pokemon.length > 0 && pokemon.map((pokeObj, index)=>{
                    return (<li key={index}>{pokeObj.name}</li>)
                })}
            </p>
        </div>
    );
}

export default GetPokemon;
