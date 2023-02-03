import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import DeleteButton from "./DeleteButton";

const PlayerList = (props) => {

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

    // remove deleted from DOM
    const removeFromDom = playerId => {
        setPlayer(player.filter(player => player._id !== playerId))
    }



    return (
        <div className="PLBG">
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <Link style={{textDecoration:"none", color:"white"}} to="/add">Add Player To Roster</Link>
                <Link style={{textDecoration:"none", color:"white"}} to="/game/1">Manage Game Roster </Link>
            </div>
            <div className="PlayerListContainer" >
                <table style={{margin:"0 auto"}}>
                    <thead>
                    <tr >
                        <th style={{fontSize:"25px",fontWeight:700,textDecoration:"underline"}}>Name</th>
                        <th style={{fontSize:"25px",fontWeight:700,paddingLeft:"30px", textDecoration:"underline"}}>Position</th>
                        {/* <th style={{fontSize:"25px",fontWeight:700,paddingLeft:"30px", textDecoration:"underline"}}>Playing?</th> */}
                        <th style={{fontSize:"25px",fontWeight:700,paddingLeft:"30px", textDecoration:"underline"}}>Actions</th>
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
                        {/* <td style={{fontWeight:700, fontSize:"20px",paddingLeft:"30px"}}>{player.playing}</td> */}
                        <td style={{paddingLeft:"30px"}}>
                            {/* <Link style={{textDecoration:"none", color:"whitesmoke"}} to={"/player/" + player._id}><button style={{backgroundColor:"lightblue"}} className='ViewButton'> View Info</button></Link> */}
                            <Link style={{textDecoration:"none", color:"whitesmoke"}} to={"/player/edit/" + player._id}><button className='EditButton'> Edit</button></Link>
                            <DeleteButton playerName={player.name} playerId={player._id} successCallback={()=>removeFromDom(player._id)} />
                        </td>
                        <td></td>
                    </tr>
                    </tbody>
                    )})}
    {/* end mapping */}
                </table>
            </div>
        </div>
    );
}
    export default PlayerList;