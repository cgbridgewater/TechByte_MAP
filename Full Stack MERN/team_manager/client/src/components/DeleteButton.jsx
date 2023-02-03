import React from "react";
import axios from "axios";

const DeleteButton = (props) =>  {
    const { playerId, successCallback, playerName } = props;
    const deletePlayer = e => {
        axios.delete("http://localhost:8000/api/player/" + playerId)
            .then(res=> { 
                alert(`Are you sure you want to delete ${playerName}?`)
                successCallback();
            })
    }

    return(
        <button 
            style={{backgroundColor:"red", color:"white", fontWeight:800}}
            onClick={ deletePlayer }
        >Delete
        </button>    
    )
}

export default DeleteButton;