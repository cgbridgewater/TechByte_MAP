import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import PersonForm from "./PersonForm";
import DeleteButton from "./DeleteButton";

const Update = (props) => {
    const {id} = useParams();
    const [ person, setPerson ] = useState({});
    const [ loaded, setLoaded ] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + id)
            .then( res => {
                console.log(res.data);
                setPerson(res.data);
                setLoaded(true);
            })
            // .catch( err => console.log(err));
    }, []);

    const updatePerson = personParam => {
        axios.put('http://localhost:8000/api/people/' + id, personParam)
            .then(res => console.log(res))
            // .catch(err => console.log(err))
    }


    return(
        <div style={{backgroundColor:"darkslateblue", minHeight:"100vh"}}>
            
            <h1>Update a Person</h1>
            {
            loaded && (
            <>
                <PersonForm 
                onSubmitProp={updatePerson} 
                initialFirstName={person.firstName} 
                initialLastName={person.lastName} 
                initialAge={person.age} />
                <DeleteButton personId= {id} successCallback= {() => navigate("/home")} />
            </> )   
            }
            <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"10px"}}>
                <Link to="/home" style={{  textDecoration: "none", color: "whitesmoke"}}><button className='ViewButton'> Home Page </button></Link>
            </div>

        </div>
    )
}

    export default Update;