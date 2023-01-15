import React, {useEffect, useState} from "react";
import axios from "axios";

import { useNavigate, useParams, Link } from "react-router-dom";

const Update = (props) => {
    const {id} = useParams();
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/item/" + id)
        .then( res => {
            console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
            
        })
        .catch( err => console.log(err) );
    }, []);

    const updateItem = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/item/' + id, {
            title,
            price,
            description
        })
        .then(res => {
            console.log(res);
            navigate("/home");
        })
        .catch(err => console.log(err))
    }

    const deleteItem = (e) => {
        axios.delete('http://localhost:8000/api/item/' + id)
            .then(res => {
                navigate("/home");
            })
            .catch(err => console.log(err))
    }

    return(
        <div style={{backgroundColor:"darkslateblue", minHeight:"70vh"}}>
            <h1>Update an Item</h1>

            <form onSubmit={updateItem}>

                <p>
                    <label> Title </label><br />
                    <input style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid lightblue", borderRadius:"15px" }} 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)}
                    value= {title}
                    />
                </p>

                <p>
                    <label> Price </label><br />
                    <input style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid lightblue", borderRadius:"15px" }} 
                    type="Number" 
                    step="0.01" 
                    onChange={(e) => 
                    setPrice(e.target.value)}
                    value={price}
                    />
                </p>

                <p>
                    <label> Description </label><br />
                    <textarea style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid lightblue", borderRadius:"15px" }} 
                    cols="40" 
                    rows="7"  
                    onChange={(e) => setDescription(e.target.value)}
                    value= {description}
                    ></textarea>
                </p>
                <input style={{backgroundColor:"lightseagreen", padding:"5px", fontSize:"15px", fontWeight:"700", borderRadius:"10px"}} 
                type="submit"/>
            </form>
            <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"10px"}}>
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
    )
}

export default Update;