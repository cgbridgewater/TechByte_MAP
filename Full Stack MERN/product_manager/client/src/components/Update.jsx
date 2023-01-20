import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";


const Update = (props) => {
    const {id} = useParams();
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    const [updateErrors, setUpdateErrors] = useState({});
    const [getErrors, setGetErrors] = useState("null");
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/item/" + id)
        .then( res => {
            console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price.toFixed(2));
            setDescription(res.data.description);
            setGetErrors("")
        })
        // .catch( err => console.log(err) );
        .catch((err) => {
            console.log("BBBBBBBBBBBB",err.response.data.path)
                setGetErrors(err.response.data.path); //Set Errors
        })
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
            setUpdateErrors({})
            navigate("/home");
        })
        .catch((err) => {
            console.log("BBBBBBBBBBBB",err) 
            setUpdateErrors(err.response.data.errors); //Set Errors
        })
    }

    const deleteItem = (e) => {
        axios.delete('http://localhost:8000/api/item/' + id)
            .then(res => {
                navigate("/home");
            })
            .catch(err => console.log(err))
    }

    return(

        <div>
                    { getErrors.length > 0  ? 
                        <div>
                            <h3 style={{color:"red", marginTop:"20"}}>Your Selection Doesn't Appear to be here, please Rewind to the home page</h3>
                            <Link to="/home" className='ViewButton' style={{  textDecoration: "none"}}><button style={{backgroundColor:"goldenrod",border:"none",color:"blue", fontWeight:"800"}}> REWIND! </button></Link>
                            <br/>
                            <br/>
                            <br/>
                            <img style={{height:"600px"}} src="https://farm66.staticflickr.com/65535/52638363868_b1a3eac40b_b.jpg" alt="bekindRewind" />
                        </div>
                        : 
        <div style={{backgroundColor:"#073daa", minHeight:"70vh"}}>



                        
                    



            {/* <Navibar/> */}
            <h1 style={{color:"goldenrod",margin:"0"}}>Update an Item</h1>

            <form onSubmit={updateItem}>

                <p>
                    <label>
                    { updateErrors.title ? 
                        <h3 style={{color:"red", margin:0}}>{updateErrors.title.message}</h3>
                        : <h3 style={{color:"goldenrod", margin:0}}>Title</h3>
                    }
                    </label>
                    <input style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"2px solid goldenrod", borderRadius:"15px" }} 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)}
                    value= {title}
                    />
                </p>

                <p>
                    <label>
                    { updateErrors.price ? 
                        <h3 style={{color:"red", margin:0}}>{updateErrors.price.message}</h3>
                        : <h3 style={{color:"goldenrod", margin:0}}>Price</h3>
                    }
                    </label>                    <input style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"2px solid goldenrod", borderRadius:"15px" }} 
                    type="Number" 
                    step="0.01" 
                    onChange={(e) => 
                    setPrice(e.target.value)}
                    value={price}
                    />
                </p>

                <p>
                    <label>
                    { updateErrors.description ? 
                        <h3 style={{color:"red", margin:0}}>{updateErrors.description.message}</h3>
                        : <h3 style={{color:"goldenrod", margin:0}}>Description</h3>
                    }
                    </label>                    <textarea style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid goldenrod", borderRadius:"15px" }} 
                    cols="40" 
                    rows="7"  
                    onChange={(e) => setDescription(e.target.value)}
                    value= {description}
                    ></textarea>
                </p>
                <input style={{ cursor: "pointer" ,backgroundColor:"#073DAA", color:"goldenrod", padding:"8px", fontSize:"15px", fontWeight:"700", border:"2px solid goldenrod", borderRadius:"10px"}} 
                type="submit"/>
            </form>

            <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"10px"}}>
                <button 
                    className='DeleteButton'
                    onClick={(e) =>{deleteItem(id)}}>
                    Delete Item
                </button>

                <Link to="/home" className='ViewButton' style={{  textDecoration: "none"}}><button style={{backgroundColor:"goldenrod",border:"none",color:"blue", fontWeight:"800"}}> Home Page </button></Link>

            </div>
        </div>
                }</div>    // ternary ender
    )
}

export default Update;