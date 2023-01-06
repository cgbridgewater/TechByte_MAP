import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import React, { useEffect, useState } from "react";


const APIWalkerVehiclesDisplay = (props) => {
    
    const { _id } = useParams();
    const [ axiosName, setAxiosName ] = useState([  ]);
    const [ axiosPassengers, setAxiosPassengers ] = useState([  ]);
    const [ axiosMaxSpeed, setAxiosMaxSpeed ] = useState([  ]);
    const [ axiosCost, setAxiosCost ] = useState([  ]);
    const [ axiosVehicleClass, setAxiosVehicleClass ] = useState([  ]);
    const [ error, setError] = useState("")
    const [ error2, setError2] = useState("")

    
    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/vehicles/${_id}`)
            .then(res => {
                console.log(res.data);
                setAxiosName(res.data.name);
                setAxiosPassengers(res.data.passengers);
                setAxiosMaxSpeed(res.data.max_atmosphering_speed);
                setAxiosCost(res.data.cost_in_credits);
                setAxiosVehicleClass(res.data.vehicle_class);
                setError("");
                setError2("");
            })
            .catch((err) => 
            console.log(err),
            setError("Error, This Item Does Not Exist!"),
            setError2("https://media3.giphy.com/media/3ohuPel436qciQZ8fC/giphy.gif")
            );
        }, [_id]); 
        
        
        
        return(
            <div>
        <div style={{textAlign:"left"}} className='Result'>
            <h1 style={{textAlign:"center", marginBottom:0}}> Luke APIWalker Search Results</h1>
            <h3 style={{textAlign:"center", marginTop: 0 }}> Vehicle Results</h3>
            <hr />
            <img style={{ marginLeft:"15%"}} src={error2} alt="" />
            <p style={{marginLeft:"30%"}}>
                Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosName} {error}
            </p>
            <p style={{marginLeft:"30%"}}>
                Max Atmosphering Speed: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosMaxSpeed}
            </p>
            <p style={{marginLeft:"30%"}}>
                Passengers: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosPassengers}
            </p>
            <p style={{marginLeft:"30%"}}>
                Cost (in credits):  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosCost}
            </p>
            <p style={{marginLeft:"30%"}}>
                Vehicle Class:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosVehicleClass}
            </p>
            
        </div>

            <hr />
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <Link to={"/"}>Search Again</Link>
            </div>


        </div>
    )
};

export default APIWalkerVehiclesDisplay;