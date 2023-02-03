import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const Game1 = () => {

    const [ player , setPlayer ] = useState("")


    // axios get all on page load
    useEffect(() => {
        axios.get("http://localhost:8000/api/player")
        .then((res) => {
            console.log(res.data);
            setPlayer(res.data);

        })
        .catch((err) => {
            console.log(err);
        })
    }, [])





    return(
        <div className='GameBG'> 
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <Link style={{textDecoration:"none", color:"white"}} to="/home">HOME</Link>
                <Link  style={{textDecoration:"none", color:"white"}}to="/game/2">Game2</Link>
                <Link style={{textDecoration:"none", color:"white"}} to="/game/3">Game3</Link>
            </div>
            <hr style={{width:"80%"}} />
            <div style={{color:"#AF4A96",fontSize:"20px" ,fontWeight:800}}>
                Game 1
            </div>
            <div className="PlayerListContainer" >
                <table style={{margin:"0 auto"}}>
                    <thead>
                    <tr >
                        <th style={{fontSize:"25px",fontWeight:700,textDecoration:"underline"}}>Name</th>
                        <th style={{fontSize:"25px",fontWeight:700,paddingLeft:"30px", textDecoration:"underline"}}>Position</th>
                        <th style={{fontSize:"25px",fontWeight:700,paddingLeft:"20%", textDecoration:"underline"}}>Playing?</th>
                    </tr>   
                    </thead>
    {/* start mapping */}
                {player.length > 0 && [...player]
                    .map((player, index) => {
                        return( 
                    <tbody>
                    <tr key={player._id}>
                        <td style={{fontWeight:700, fontSize:"20px"}}>{player.name}</td>
                        <td style={{fontWeight:700, fontSize:"20px",paddingLeft:"30px"}}>{player.position}</td>
                        <div>
                            <td style={{fontWeight:700, fontSize:"20px",paddingLeft:"30px",color:"cyan"}}>Playing</td>
                            <td style={{fontWeight:700, fontSize:"20px",paddingLeft:"30px", color:"crimson"}}>Not Playing</td>
                            <td style={{fontWeight:700, fontSize:"20px",paddingLeft:"30px", color:"yellow"}}>{player.statusGame1}</td>
                        </div>
                        
                    </tr>
                    </tbody>
                    )})}
    {/* end mapping */}
                </table>
            </div>













        </div>
    )
}

export default Game1