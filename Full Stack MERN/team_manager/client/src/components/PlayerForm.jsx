import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PlayerForm = (props) => {
    const[ name, setName ] = useState("");
    const[ position, setPosition ] = useState("sub");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()


    // On Submit Handler //
    const createPlayer = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/player", {
            name,
            position,
            // playing: "undecided"
        })
        .then(res => {
            console.log(res.data);
            setName("")
            setPosition("")
            navigate("/home")
        })
        .catch((err) => {
            console.log(err.response) 
            setErrors(err.response.data.errors); //Set Errors
        })
    }
    


    return (
        <div className='FormBG'>
            <form className="Form" style={{padding:"30px", fontSize:"20px", fontWeight:800}} onSubmit={createPlayer}>
                {/* Player Name */}
                <div>
                    <label style={{marginTop:"4%"}}> {/* error ternary */}
                        { errors.name ?
                            <p style={{color:"red", fontWeight:800}}> {errors.name.message}</p>
                            :
                            <p> Player Name</p>
                        }
                    </label>
                    <input 
                        style={{backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid green", borderRadius:"15px", margin:"0" }} 
                        type="text" 
                        value={name}
                        onChange={(e) => 
                            setName(e.target.value)}
                        />
                </div>
                {/* Player Position */}
                <div>
                    <label style={{marginTop:"4%"}}>
                        <p>Player Position</p>
                    </label>
                    <select onChange={(e) => setPosition(e.target.value)} style={{margin:"0 0 3% 0",border:"3px solid black", fontSize:"18px", color:"white",backgroundColor:"green",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"}}>
                        <option value="Sub">Substitute Player</option>
                        <option value="Striker">Striker</option>
                        <option value="Forward">Forward</option>
                        <option value="Midfield">Midfield</option>
                        <option value="Defender">Defender</option>
                        <option value="Goalie">Goalie</option>
                    </select>
                </div>
                {/* Submit Button */}
                {name.length > 2 ? 
                <input 
                    style={{ cursor: "pointer" ,backgroundColor:"whitesmoke", borderColor:"green", color:"green", padding:"5px", fontSize:"15px", fontWeight:"700", borderRadius:"10px", boxShadow:"0 8px 12px 0 greenYellow"}} 
                    type="submit" value="Add Player"/>
                    :
                    <input 
                    style={{ cursor: "pointer" ,backgroundColor:"grey", borderColor:"darkgreen", color:"darkgreen", padding:"5px", fontSize:"15px", fontWeight:"700", borderRadius:"10px"}} 
                    type="submit" value="Add Player"  disabled="yes"/>
                }
                <Link style={{textDecoration:"none",color:"White",backgroundColor:"green",padding:"4px", fontSize:"15px", fontWeight:"700", border:"2px solid white" , borderRadius:"10px"}} to="/home">Cancle</Link>
            </form>
        </div>
    )
}

export default PlayerForm;