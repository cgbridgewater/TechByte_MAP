import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import React, { useEffect, useState } from "react";


const APIWalkerStarshipsDisplay = (props) => {
    
    const { _id } = useParams();
    const [ axiosName, setAxiosName ] = useState([  ]);
    const [ axiosPassengers, setAxiosPassengers ] = useState([  ]);
    const [ axiosMaxSpeed, setAxiosMaxSpeed ] = useState([  ]);
    const [ axiosCost, setAxiosCost ] = useState([  ]);
    const [ axiosHyperdrive, setAxiosHyperdrive ] = useState([  ]);
    const [ error, setError] = useState("")
    const [ error2, setError2] = useState("")


    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/starships/${_id}`)
            .then(res => {
                console.log(res.data);
                setAxiosName(res.data.name);
                setAxiosPassengers(res.data.passengers);
                setAxiosMaxSpeed(res.data.max_atmosphering_speed);
                setAxiosCost(res.data.cost_in_credits);
                setAxiosHyperdrive(res.data.hyperdrive_rating);
                setError("");
                setError2("");
            })
            .catch((err) => 
            console.log(err),
            setError("Error, This Item Does Not Exist!"),
            setError2("https://i.makeagif.com/media/12-06-2015/vsoe85.gif")
            );
    }, [_id]); 



    return(
        <div>
        <div style={{textAlign:"left"}} className='Result'>
        <h1 style={{textAlign:"center", marginBottom:0}}> Luke APIWalker Search Results</h1>
            <h3 style={{textAlign:"center", marginTop: 0 }}> Starship Results</h3>
            <hr />
            <img style={{ marginLeft:"27%"}} src={error2} alt=""/>
            <p style={{marginLeft:"30%"}}>
                Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosName} {error}
            </p>
            <p style={{marginLeft:"30%"}}>
                Max Atmosphering Speed: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosMaxSpeed}
            </p>
            <p style={{marginLeft:"30%"}}>
                Hyperdrive Rating: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {axiosHyperdrive}
            </p>
            <p style={{marginLeft:"30%"}}>
                Cost (in credits): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {axiosCost}
            </p>
            <p style={{marginLeft:"30%"}}>
                Passengers: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosPassengers}
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

export default APIWalkerStarshipsDisplay;