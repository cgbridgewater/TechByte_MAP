import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const UpdateAuthor = (props) => {
    const {id} = useParams();
    const [ author, setAuthor ] = useState("");

    const [updateErrors, setUpdateErrors] = useState({});
    const [getErrors, setGetErrors] = useState("null");
    const navigate = useNavigate();
    
    // ON PAGE LOAD AXIOS DATA GET
    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + id)
        .then( res => {
            console.log(res.data);
            setAuthor(res.data);
            setGetErrors("")
        })
        .catch((err) => {
            console.log("BBBBBBBBBBBB",err.response.data.path)
                setGetErrors(err.response.data.path); //Set Errors
        })
    }, []);

    // UPDATE AXIOS
    const updateItem = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' + id, {
        author
        })
        .then(res => {
            console.log(res);
            setUpdateErrors({})
            navigate("/");
        })
        .catch((err) => {
            console.log("BBBBBBBBBBBB",err) 
            setUpdateErrors(err.response.data.errors); //Set Errors
        })
    }

    // DELETE AXIOS
    const deleteAuthor = (e) => {
        axios.delete('http://localhost:8000/api/author/' + id)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="UpdateMain">
            {/* Bad Author ID Lookup Ternary */}
            { getErrors.length > 0  ? 
                <div>
                    <h3 style={{color:"darkred", marginTop:"20"}}>Your Selection Doesn't Appear to be here, please add them</h3>
                    <Link to="/new" style={{  textDecoration: "none"}}><button className='NewButton'> Add New Author </button></Link>
                    <br/>
                    <br/>
                    <br/>
                    <img style={{height:"500px", borderRadius:"100%"}} src="https://www.filepicker.io/api/file/vP8D0dTuQyaKlUdr13pk" alt="bekindRewind" />
                </div>
            : 
            <div style={{minHeight:"70vh"}}>
                <h1 style={{color:"darkred",padding:"3%"}}>Update an Item</h1>
                {/* Form Start */}
                <form className="Form" style={{ fontSize:"20px", fontWeight:800,boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)"}} onSubmit={updateItem}>
                    <p>
                        {/* FORM ERROR TERNARY  */}
                        <label> 
                        { updateErrors.author ? 
                            <h3 style={{color:"red", margin:0}}>{updateErrors.author.message}</h3>
                            : <h3 style={{color:"darkred", margin:0}}>Title</h3>
                        }
                        </label>
                        {/* Author Input */}
                        <input style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid darkred", borderRadius:"15px" }} 
                        type="text" 
                        onChange={(e) => setAuthor(e.target.value)}
                        value= {author.author}
                        />
                    </p>
                    {/* Submit button */}
                    <input style={{ cursor: "pointer" ,backgroundColor:"darkred", color:"white", padding:"8px", fontSize:"15px", fontWeight:"500",border:"2px solid white", borderRadius:"10px",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)"}} 
                    type="submit"/>
                    <Link to="/" className='ViewButton' style={{  textDecoration: "none"}}><button style={{marginLeft:"10px", padding:"8px",backgroundColor:"white",borderRadius:"10px",border:"2px solid darkred",color:"darkred", fontWeight:"800",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)"}}> Cancle </button></Link>
                </form>
            </div>
        }</div>    // ternary ender
    )
}

export default UpdateAuthor;