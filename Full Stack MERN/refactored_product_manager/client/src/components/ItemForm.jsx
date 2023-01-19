import React, {useState} from "react";
import axios from "axios";

const ItemForm = (props) => {
    const { item, setItem } = props;
    const[ title, setTitle ] = useState("");
    const[ price, setPrice ] = useState("");
    const[ description, setDescription ] = useState("");
    // const[ isadded, setIsadded ] = useState(null)


    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/item", {
            title,
            price,
            description
    })
        .then( res => {
            console.log(res);
            console.log(res.data) 
            // setIsadded(true)
            setItem([...item, res.data])
            setTitle("")
            setPrice("")
            setDescription("")
        })
        .catch( err => console.log(err))
    }


    return(
        <div style={{backgroundColor:"darkslateblue", minHeight:"60vh"}}>
            <h1>Add New Product Into Database</h1>
            <form className="Form" style={{ fontSize:"20px", fontWeight:800,boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)"}} onSubmit={onSubmitHandler}>
                <p>
                    <label> Title </label><br />
                    <input style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid lightblue", borderRadius:"15px",width:"80%",maxWidth:"400px" }} 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)}
                    value= {title}
                    />
                </p>
                <p>
                    <label> Price </label><br />
                    <input style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid lightblue", borderRadius:"15px",width:"80%",maxWidth:"400px" }} 
                    type="Number" 
                    step="0.01" 
                    min="0.01"
                    onChange={(e) => 
                    setPrice(e.target.value)}
                    value={price}
                    />
                </p>
                <p>
                    <label> Description </label><br />
                    <textarea style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid lightblue", borderRadius:"15px",width:"80%",maxWidth:"400px" }} 
                    // cols="40" 
                    rows="7"  
                    onChange={(e) => setDescription(e.target.value)}
                    value= {description}
                    ></textarea>
                </p>
                <input style={{ cursor: "pointer" ,backgroundColor:"lightseagreen", padding:"5px", fontSize:"15px", fontWeight:"700", borderRadius:"10px",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)"}} type="submit"/>
            </form>
            
            {/* { isadded ?
                <div>
                    <h1>"{title}" has been added to the database!</h1>
                    <img src="https://media.tenor.com/2y6XTN-gDUIAAAAC/borat-great.gif" alt="error"/>
                </div>
                :
                null
            } */}
        </div>
    )
}

export default ItemForm;