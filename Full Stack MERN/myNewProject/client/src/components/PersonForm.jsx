import React, { useState } from 'react'
import axios from 'axios';


const PersonForm = () => {
    const[ firstName, setFirstName] = useState("");
    const[ lastName, setLastName] = useState("");
    const[ isadded, setIsadded] = useState(null)

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/people", {
            firstName,
            lastName
    })
        .then(res=> {
            console.log(res);
            console.log(res.data)
            setIsadded(true)
        })
        .catch(err=>console.log(err))
}


    return (
        <div style={{backgroundColor:"darkslateblue", minHeight:"100vh"}}>
            <form style={{padding:"30px", fontSize:"20px", fontWeight:800}} onSubmit={onSubmitHandler}>
                <p>
                    <label> First Name</label><br />
                    <input style={{backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid lightblue", borderRadius:"15px" }} type="text" onChange={(e) => setFirstName(e.target.value)}/>
                </p>
                <p>
                    <label> Last Name</label><br />
                    <input style={{backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid lightblue", borderRadius:"15px" }} type="text" onChange={(e) => setLastName(e.target.value)}/>
                </p>
                <input type="submit"/>
            </form>

            { isadded ?
                <div>
                    <h1>"{firstName} {lastName}" has been added to the database!</h1>
                    <img src="https://media.tenor.com/2y6XTN-gDUIAAAAC/borat-great.gif" alt="error"/>
                </div>
                :
                null
            }

        </div>
    )
}

export default PersonForm;