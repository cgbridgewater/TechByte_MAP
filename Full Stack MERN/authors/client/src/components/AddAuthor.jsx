import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const ItemForm = (props) => {
    const [ author, setAuthor ] = useState("")
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // ON SUBMIT //
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author", {
            author,
    })
        .then( res => {
            console.log(res);
            // console.log(res.data) 
            // setAuthorObject([...AuthorObject, res.data])
            setAuthor("")
            setErrors({})
            navigate("/");
        })
        .catch((err) => {
            console.log(err.response) 
                setErrors(err.response.data.errors); //Set Errors
        })
    }

    return(
        <div className="AddMain" style={{minHeight:"90vh"}}>
            <h1 style={{margin:"0",padding:"3%",color:"darkred"}}>Add Author To Database</h1>
            <form className="Form" style={{ fontSize:"20px", fontWeight:800,boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)"}} onSubmit={onSubmitHandler}>
                <h3>
                    <label> {/* error ternary  */}
                    { errors.author ? 
                        <p style={{color:"red", margin:0}}>{errors.author.message}</p>
                        : <p style={{color:"darkred", margin:0}}>Author</p>
                    }
                    </label>
                    <input style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid darkred", borderRadius:"15px" }} 
                    type="text" 
                    onChange={(e) => setAuthor(e.target.value)}
                    value= {author}
                    />
                </h3>  
                <input style={{ cursor: "pointer" ,backgroundColor:"darkred", color:"white", padding:"8px", fontSize:"15px", fontWeight:"500",border:"2px solid white", borderRadius:"10px",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)"}} type="submit"/>
                <Link to="/" className='ViewButton' style={{  textDecoration: "none"}}><button style={{marginLeft:"10px", padding:"8px",backgroundColor:"white",borderRadius:"10px",border:"2px solid darkred",color:"darkred", fontWeight:"800",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)"}}> Cancle </button></Link>
            </form>
        </div>
    )
}

export default ItemForm;