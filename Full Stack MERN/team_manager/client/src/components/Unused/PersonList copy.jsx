import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import DeleteButton from "./DeleteButton";

const PersonList = (props) => {
    const ischanged = props
    const [ person, setPerson ] = useState([])
    // const [ischanged, setIsChanged] = useState(false)


    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
        .then((res) => {
            console.log(res.data);
            setPerson(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [ischanged])
//, isSorted


    const removeFromDom = personId => {
        setPerson(person.filter(person => person._id !== personId))
    }



    return (
        <div style={{backgroundColor:'purple', minHeight:"70vh"}}>

            <div style={{ width:"40%",margin:"10px auto", padding:"20px",backgroundColor:"silver",border:"3px solid darkblue", borderRadius:"20px" }} >
                <table style={{margin:"0 auto"}}>
                    <thead>
                    <tr>
                        <th style={{fontSize:"25px",fontWeight:700,textDecoration:"underline"}}>First Name</th>
                        <th style={{fontSize:"25px",fontWeight:700,paddingLeft:"30px", textDecoration:"underline"}}>Last Name</th>
                        <th style={{fontSize:"25px",fontWeight:700,paddingLeft:"30px", textDecoration:"underline"}}>Age</th>
                        <th style={{fontSize:"25px",fontWeight:700,paddingLeft:"30px", textDecoration:"underline"}}>Actions</th>
                    </tr>
                    </thead>
    {/* start mapping */}
                {
                    person.map((person, index) => {
                        return( 
                    <tbody>
                    <tr key={index}>
                        <td style={{fontWeight:700, fontSize:"20px"}}>{person.firstName}</td>
                        <td style={{fontWeight:700, fontSize:"20px",paddingLeft:"30px"}}>{person.lastName}</td>
                        <td style={{fontWeight:700, fontSize:"20px",paddingLeft:"30px"}}>{person.age}</td>
                        <td style={{paddingLeft:"30px"}}>
                            <Link style={{textDecoration:"none", color:"whitesmoke"}} to={"/people/" + person._id}><button style={{backgroundColor:"lightblue"}} className='ViewButton'> View Info</button></Link>
                            <Link style={{textDecoration:"none", color:"whitesmoke"}} to={"/people/edit/" + person._id}><button style={{backgroundColor:"lightgreen"}} className='EditButton'> Edit</button></Link>
                            <DeleteButton personId={person._id} successCallback={()=>removeFromDom(person._id)} />
                        </td>
                        <td></td>
                    </tr>
                    </tbody>
                    )})}
    {/* end mapping */}
                </table>
            </div>
        </div>
    );
}
    export default PersonList;