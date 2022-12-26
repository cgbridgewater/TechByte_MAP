import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import React, { useEffect, useState } from "react";


const APIWalkerPlanetByNameDisplay = (props) => {
    
    const { name } = useParams();
    const [ axiosName, setAxiosName ] = useState([  ]);
    const [ axiosTerrain, setAxiosTerrain ] = useState([  ]);
    const [ axiosDiameter, setAxiosDiameter ] = useState([  ]);
    const [ axiosPopulation, setAxiosPopulation ] = useState([  ]);
    const [ axiosGravity, setAxiosGravity ] = useState([  ]);
    const [ axiosClimate, setAxiosClimate ] = useState([  ]);
    const [ error, setError] = useState("")
    const [ error2, setError2] = useState("")



    
    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/planets/?search=${name}`)
            .then(res => {
                console.log(res.data.results[0].name);
                setAxiosName(res.data.results[0].name);
                setAxiosTerrain(res.data.results[0].terrain);
                setAxiosDiameter(res.data.results[0].diameter);
                setAxiosPopulation(res.data.results[0].population);
                setAxiosGravity(res.data.results[0].gravity);
                setAxiosClimate(res.data.results[0].climate);
                setError("");
                setError2("");
                
            })
            .catch((err) => 
            console.log(err),
            setError("Error, This Item Does Not Exist!"),
            setError2("https://media.tenor.com/TlfAvuz0tLMAAAAC/obi-wan-kenobi-these-are-not-the-droids.gif")
            );
    }, []); 



    return(
        <div>
        <div style={{textAlign:"left"}} className='Result'>
            <h1 style={{textAlign:"center", marginBottom: 0}}> Luke APIWalker Search Results</h1>
            <h3 style={{textAlign:"center", marginTop: 0 }}> Planet Results</h3>
            <hr />
            <img style={{ marginLeft:"15%"}} src={error2} />
            <p style={{marginLeft:"30%"}}>
                Planet:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosName} {error}
            </p>
            <p style={{marginLeft:"30%"}}>
                Population:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosPopulation}
            </p>
            <p style={{marginLeft:"30%"}}>
                Terrain: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosTerrain}
            </p>
            <p style={{marginLeft:"30%"}}>
                Gravity:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosGravity}
            </p>
            <p style={{marginLeft:"30%"}}>
                Climate:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosClimate}
            </p>
            <p style={{marginLeft:"30%"}}>
                Diameter: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosDiameter}
            </p>
            
            {/* <p>
                {
                axiosResult.length > 0 && axiosResult.map((axiosObj, index)=>{
                    return (<li key={index}>{axiosObj.name}</li>)
                })}
            </p> */}

            </div>

            <hr />
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <Link to={"/"}>Search Again</Link>
            </div>
        </div>
    )
};


export default APIWalkerPlanetByNameDisplay;