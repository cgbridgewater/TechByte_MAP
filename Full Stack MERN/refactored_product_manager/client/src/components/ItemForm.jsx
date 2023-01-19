import React, { useState } from "react";
import { Await, useNavigate } from "react-router-dom";


const ItemForm = (props) => {

    const { initialTitle, initialPrice, initialDescription, onSubmitProp, errors } = props;
    const[ title, setTitle ] = useState( initialTitle );
    const[ price, setPrice ] = useState( initialPrice );
    const[ description, setDescription ] = useState( initialDescription );
    const navigate = useNavigate()

    const onSubmitHandler = async (e) => {
        e.preventDefault(); 
        const succeed = await onSubmitProp({ title, price, description});
        console.log(succeed)
        if(succeed) {
            navigate("/home")
            setTitle("")
            setPrice("")
            setDescription("")
    }}


    return(
        <div style={{backgroundColor:"darkslateblue", minHeight:"60vh"}}>
            
            <form className="Form"  onSubmit={onSubmitHandler} style={{ fontSize:"20px", fontWeight:800,boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)"}}>

                <p>
                    <label>
                    { errors.title ? 
                        <h3 style={{color:"red"}}>{errors.title.message}</h3>
                        : <h3>Title</h3>
                    }
                    </label>
                    <input 
                    style={{marginTop:"0",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid lightblue", borderRadius:"15px",width:"80%",maxWidth:"400px" }} 
                    type="text" 
                    name="title"
                    value={title}
                    onChange={(e) => 
                        setTitle(e.target.value)}
                    />
                </p>
                <p>
                    <label>
                    { errors.price ? 
                        <h3 style={{color:"red"}}>{errors.price.message}</h3>
                        : <h3>Price</h3>
                    }
                    </label>
                    <input 
                    style={{marginTop:"0",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid lightblue", borderRadius:"15px",width:"80%",maxWidth:"400px" }} 
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
                    <label>
                    { errors.description ? 
                        <h3 style={{color:"red"}}>{errors.description.message}</h3>
                        : <h3>Description</h3>
                    }
                    </label>
                    <textarea 
                    style={{marginTop:"0",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid lightblue", borderRadius:"15px",width:"80%",maxWidth:"400px" }} 
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