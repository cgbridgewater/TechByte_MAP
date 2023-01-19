import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import DeleteButton from './DeleteButton'

const Detail = (props) => {

    const [ person, setPerson ] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();

        useEffect(() => {
            axios.get("http://localhost:8000/api/people/" + id)
            .then( res => {
                console.log(res.data);
                setPerson(res.data);
            })
            .catch( err => console.log(err) );
        }, [id]);

    const deleteperson = (e) => {
        axios.delete('http://localhost:8000/api/people/' + id)
            .then(res => {
                navigate("/home");
            })
            .catch(err => console.log(err))
    }


    return (
        <div style={{backgroundColor:"darkslateblue", minHeight:"70vh"}}>

                <div style={{margin:"auto", marginBottom:"10px", marginTop:"30px",padding:"30px", height:"300px", width:"900px",backgroundColor:"lightslategray", border:"3px solid darkblue", borderRadius:"15px"}}>
                    <h1>Name: {person.firstName} {person.lastName}</h1>
                    <h4>Age: {person.age}</h4>
                </div>

                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <DeleteButton personId= {id} successCallback= {() => navigate("/home")} />
                    <button className='ViewButton'>
                        <Link to="/home" style={{  textDecoration: "none", color: "whitesmoke"}}> Home Page</Link>
                    </button>
                </div>
        </div>
    )
}

    export default Detail;