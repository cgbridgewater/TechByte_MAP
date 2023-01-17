import React, { useEffect, useState} from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Navibar from "./Navibar";

const Detail = () => {
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
        <div style={{backgroundColor:"darkslateblue", minHeight:"70vh"}}>
            <Navibar/>
                <div style={{margin:"auto", marginBottom:"10px", marginTop:"30px",padding:"30px", height:"300px", width:"900px",backgroundColor:"lightslategray", border:"3px solid darkblue", borderRadius:"15px"}}>
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
                    <button className='ViewButton'>
                        <Link to="/home" style={{  textDecoration: "none", color: "whitesmoke"}}> Home Page</Link>
                    </button>
                </div>
        </div>
    );
}

export default Detail;