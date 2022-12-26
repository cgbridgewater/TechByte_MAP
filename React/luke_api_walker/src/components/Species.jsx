import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import React, { useEffect, useState } from "react";


const APIWalkerSpeciesDisplay = (props) => {
    
    const { _id } = useParams();
    const [ axiosName, setAxiosName ] = useState([  ]);
    const [ axiosClassification, setAxiosClassification ] = useState([  ]);
    const [ axiosAveLife, setAxiosAveLife ] = useState([  ]);
    const [ axiosLanguage, setAxiosLanguage ] = useState([  ]);
    const [ error, setError] = useState("")
    const [ error2, setError2] = useState("")
    
    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/species/${_id}`)
            .then(res => {
                console.log(res.data);
                setAxiosName(res.data.name);
                setAxiosClassification(res.data.classification);
                setAxiosAveLife(res.data.average_lifespan);
                setAxiosLanguage(res.data.language);
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
            <h1 style={{textAlign:"center", marginBottom:0}}> Luke APIWalker Search Results</h1>
            <h3 style={{textAlign:"center", marginTop: 0 }}> Vehicle Results</h3>
            <hr />
            <img style={{ marginLeft:"15%"}} src={error2} />
            <p style={{marginLeft:"30%"}}>
                Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosName} {error}
            </p>
            <p style={{marginLeft:"30%"}}>
                Classification: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosClassification}
            </p>
            <p style={{marginLeft:"30%"}}>
                Lifespan: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosAveLife}
            </p>
            <p style={{marginLeft:"30%"}}>
                Language:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosLanguage}
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

export default APIWalkerSpeciesDisplay;