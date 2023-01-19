import React from "react";
import axios from "axios";

const DeleteButton = (props) =>  {
    const { itemId, successCallback } = props;
    const deleteItem = e => {
    axios.delete('http://localhost:8000/api/item/' + itemId)
        .then(res => { successCallback()
        })
    .catch(err => console.log(err))
    }

    return(
        <button 
            className="DeleteButton"
            style={{backgroundColor:"red", color:"white"}}
            onClick={ deleteItem }
        >Delete!        
        </button>    
    )
}

export default DeleteButton;