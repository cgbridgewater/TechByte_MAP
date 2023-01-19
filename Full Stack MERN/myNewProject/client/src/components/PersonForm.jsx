import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PersonForm = (props) => {
    const{ initialFirstName, initialLastName, initialAge, onSubmitProp } = props;
    const[ firstName, setFirstName ] = useState(initialFirstName);
    const[ lastName, setLastName ] = useState(initialLastName);
    const[ age, setAge ] = useState(initialAge);
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ firstName, lastName, age});
        navigate("/home")
    }


    return (
        <div style={{backgroundColor:"darkslateblue", minHeight:"30vh"}}>
            <form className="Form" style={{padding:"30px", fontSize:"20px", fontWeight:800}} onSubmit={onSubmitHandler}>
                <p>
                    <label> First Name </label><br />
                    <input 
                        style={{backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid lightblue", borderRadius:"15px" }} 
                        type="text" 
                        name='firstName'
                        value={firstName}
                        onChange={(e) => 
                        setFirstName(e.target.value)}
                        />
                </p>
                <p>
                    <label> Last Name </label><br />
                    <input 
                        style={{backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid lightblue", borderRadius:"15px" }} 
                        type="text" 
                        onChange={(e) => 
                        setLastName(e.target.value)}
                        value={lastName}
                        />
                </p>
                <p>
                    <label> Age </label><br />
                    <input 
                        style={{backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid lightblue", borderRadius:"15px" }} 
                        type="number" 
                        step="1"
                        min="1" 
                        onChange={(e) => 
                        setAge(e.target.value)}
                        value={age}
                        />
                </p>
                <input 
                    style={{ cursor: "pointer" ,backgroundColor:"lightseagreen", padding:"5px", fontSize:"15px", fontWeight:"700", borderRadius:"10px"}} 
                    type="submit"/>
            </form>

        </div>
    )
}

export default PersonForm;