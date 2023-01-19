import React, { useEffect, useState} from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import DeleteButton from "./DeleteButton"

const Detail = (props) => {
    const [ item, setItem ] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();
    // const[ isValid, setIsValid ] = useState(null)

        useEffect(() => {
            axios.get("http://localhost:8000/api/item/" + id)
            .then( res => {
                console.log(res.data);
                setItem(res.data);
            })
            .catch( err => {
                console.log(err)
            });
        }, [id]);




    return (
        <div style={{backgroundColor:"darkslateblue", minHeight:"70vh"}}>

            {/* { isValid ?
                <div>
                    <img src="https://media.tenor.com/2y6XTN-gDUIAAAAC/borat-great.gif" alt="error"/>
                </div>
                :
                <h1>Fuct it</h1>
            } */}
                <div style={{margin:"auto", marginBottom:"10px", marginTop:"30px",padding:"30px", height:"300px", width:"900px",backgroundColor:"lightslategray", border:"3px solid darkblue", borderRadius:"15px"}}>
                    <h1>{item.title}</h1>
                    <h4>Price: ${item.price.toFixed(2)}</h4>
                    <p>Description: {item.description}</p>
                </div>




                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <DeleteButton itemId= {id} successCallback= {() => navigate("/home")} />
                    <Link to="/home" style={{  textDecoration: "none", color: "whitesmoke"}}><button className='ViewButton'> Home Page</button></Link>
                </div>
        </div>
    );
}

export default Detail;