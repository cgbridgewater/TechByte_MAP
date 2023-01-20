import React, { useEffect, useState} from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
// import Navibar from "./Navibar";

const Detail = () => {
    // const [ item, setItem ] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    const [getErrors, setGetErrors] = useState("null");


        useEffect(() => {
            axios.get("http://localhost:8000/api/item/" + id)
            .then( res => {
                console.log(res.data);
                // setItem(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price.toFixed(2));
                setDescription(res.data.description);
                setGetErrors("")

            })
            .catch((err) => {
                console.log(err.response.data.path)
                    setGetErrors(err.response.data.path); //Set Errors
            })
        }, []);

    const deleteItem = (e) => {
        axios.delete('http://localhost:8000/api/item/' + id)
            .then(res => {
                navigate("/home");
            })
            .catch(err => console.log(err))
    }


    return (

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

        <div style={{backgroundColor:"#073DAA", minHeight:"70vh"}}>
            {/* <Navibar/> */}
                <div style={{margin:"auto", marginBottom:"10px", marginTop:"30px",padding:"30px", height:"300px", width:"900px",backgroundColor:"goldenrod", border:"2px solid white", borderRadius:"15px"}}>
                    <h1 style={{color:"#073DAA"}}>{title}</h1>
                    <h4 style={{color:"#073DAA"}}>Price: ${price}</h4>
                    <p style={{color:"#073DAA"}}>Description: {description}</p>
                </div>

                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <button 
                        className='DeleteButton'
                        onClick={(e) =>{deleteItem(id)}}>
                        Delete Item    
                    </button>
                    
                        <Link className='ViewButton' to="/home" style={{  textDecoration: "none", color: "whitesmoke"}}><button style={{backgroundColor:"goldenrod",border:"none",color:"blue", fontWeight:"800"}}> Home Page</button></Link>
                    
                </div>
        </div>
                        }</div>    // ternary ender
    );
}

export default Detail;