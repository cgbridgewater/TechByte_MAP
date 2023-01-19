import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const ItemForm = (props) => {

    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const[ title, setTitle ] = useState( initialTitle );
    const[ price, setPrice ] = useState( initialPrice );
    const[ description, setDescription ] = useState( initialDescription );
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ title, price, description});
        navigate("/home")
        setTitle("")
        setPrice("")
        setDescription("")
    }



    return(
        <div style={{backgroundColor:"darkslateblue", minHeight:"60vh"}}>
            
            <form className="Form"  onSubmit={onSubmitHandler} style={{ fontSize:"20px", fontWeight:800,boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)"}}>
                <p>
                    <label> Title </label><br />
                    <input 
                    style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid lightblue", borderRadius:"15px",width:"80%",maxWidth:"400px" }} 
                    type="text" 
                    name="title"
                    value={title}
                    onChange={(e) => 
                        setTitle(e.target.value)}
                    />
                </p>
                <p>
                    <label> Price </label><br />
                    <input 
                    style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid lightblue", borderRadius:"15px",width:"80%",maxWidth:"400px" }} 
                    type="Number" 
                    step="0.01" 
                    min="0.01"
                    name="price"
                    value={price}
                    onChange={(e) => 
                        setPrice(e.target.value)}
                    />
                </p>
                <p>
                    <label> Description </label><br />
                    <textarea 
                    style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid lightblue", borderRadius:"15px",width:"80%",maxWidth:"400px" }} 
                    rows="7"  
                    name="description"
                    value={description}
                    onChange={(e) => 
                        setDescription(e.target.value)}
                    ></textarea>
                </p>
                <input 
                    style={{ cursor: "pointer" ,backgroundColor:"darkblue",color:"whitesmoke", padding:"8px", fontSize:"15px", fontWeight:"700", borderRadius:"10px",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)"}} 
                    type="submit"/>
            </form>
        </div>
    )
}

export default ItemForm;