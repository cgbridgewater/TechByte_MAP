import React, { useEffect, useState} from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const Detail = (props) => {
    const {removeFromDom} = props
    const [ item, setItem ] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();


    
    
        useEffect(() => {
            axios.get("http://localhost:8000/api/item/" + id)
            .then( res => {
                console.log(res.data);
                setItem(res.data);
            })
            .catch( err => console.log(err) );
        }, []);

    const deleteItem = (e) => {
        axios.delete('http://localhost:8000/api/item/' + id)
            .then(res => {
                navigate("/home");
            })
            .catch(err => console.log(err))
    }





    return (
        <div style={{backgroundColor:"darkGrey", height:"80vh", paddingTop:"10%"}}>
            <div style={{margin:"auto", marginTop:"30px",padding:"30px", height:"300px", width:"900px",backgroundColor:"blanchedalmond", border:"3px solid brown", borderRadius:"15px"}}>
                <h1>{item.title}</h1>
                <h4>Price: ${item.price}</h4>
                <p>Description: {item.description}</p>
            </div>

            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <button 
                    className='DeleteButton'
                    onClick={(e) =>{deleteItem(id)}}>
                    Delete Item    
                </button>
                <button className='DeleteButton'>
                    <Link to="/home" style={{  textDecoration: "none", color: "whitesmoke"}}> Home Page</Link>
                </button>
            </div>

        </div>
    );
}

export default Detail;