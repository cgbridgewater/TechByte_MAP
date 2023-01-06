import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import React, { useEffect, useState } from "react";


const APIWalkerPeopleDisplay = (props) => {
    
    const { _id } = useParams();
    const [ axiosName, setAxiosName ] = useState("");
    const [ axiosHeight, setAxiosHeight ] = useState("");
    const [ axiosMass, setAxiosMass ] = useState("");
    const [ axiosGender, setAxiosGender ] = useState("");
    const [ axiosHomeWorld, setAxiosHomeWorld ] = useState([  ]);
    const [ homeWorld, setHomeWorld ] = useState("");
    const [ error, setError] = useState("")
    const [ error2, setError2] = useState("")
    const [ isError, setIsError] = useState(false)
    
    const link = `http://localhost:3000/planetByName/`

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/${_id}`)
            .then(res => {
                setError("");
                setError2("");
                setIsError(false)
                setAxiosHomeWorld(res.data.homeworld);
                console.log(res.data);
                setAxiosName(res.data.name);
                setAxiosHeight(res.data.height);
                setAxiosMass(res.data.mass);
                setAxiosGender(res.data.gender);
                // axios
                //     .get(`${axiosHomeWorld}`) 
                //     .then(res => {
                //         console.log("AAAAAAAA")
                //         console.log(res.data.name);
                //         setHomeWorld(res.data.name);
                //     })
                //     .catch((err) => console.log("I didn't work!!!!"), console.log("DDDDDD"));
            })
            .catch((err) => 
            console.log("HELLLLLOOOOO"),
            setError("Fetching your data....."),
            setError2("https://media.tenor.com/TlfAvuz0tLMAAAAC/obi-wan-kenobi-these-are-not-the-droids.gif"),
            setIsError(true)
            );
        }, [_id]); 
        
        useEffect(() => {
            axios
            .get(`${axiosHomeWorld}`) 
            .then(res => {
                console.log("AAAAAAAA")
                console.log(res.data.name);
                setHomeWorld(res.data.name);
            })
            .catch((err) => console.log("I didn't work!!!!"), console.log("DDDDDD"));
        }, [axiosHomeWorld]); 


    if(!isError){
    return(
    <div>
        <div style={{textAlign:"left"}} className='Result'>
            <h1 style={{textAlign:"center", marginBottom:0}}> Luke APIWalker Search Results</h1>
            <h3 style={{textAlign:"center", marginTop: 0 }}> Charactor Results</h3>
            <hr />
            <p style={{marginLeft:"30%"}}>
                Name:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosName}  {error}
            </p>
            <p style={{marginLeft:"30%"}}>
                Height:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosHeight}
            </p>
            <p style={{marginLeft:"30%"}}>
                Mass:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosMass}
            </p>
            <p style={{marginLeft:"30%"}}>
                Gender:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosGender}
            </p>
            <p style={{marginLeft:"30%"}}>
                Home World Info: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <a href={link + homeWorld} alt="Home World" >{homeWorld}</a>
            </p>

        </div>

            <hr />
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <Link to={"/"}>Search Again</Link>
            </div>

    </div>
    )
    } else {
    return(
            <div >
                <img style={{ marginLeft:"15%"}} alt="" src={error2}/>
            </div>
    )
    }
};

export default APIWalkerPeopleDisplay;