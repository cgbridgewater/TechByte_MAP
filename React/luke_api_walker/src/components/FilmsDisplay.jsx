import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import React, { useEffect, useState } from "react";


const APIWalkerFilmsDisplay = (props) => {
    
    const { _id } = useParams();
    const [ axiosTitle, setAxiosTitle ] = useState([  ]);
    const [ axiosEpisodeId, setAxiosEpisodeId ] = useState([  ]);
    const [ axiosReleaseDate, setAxiosReleaseDate ] = useState([  ]);
    const [ axiosOpeningCrawl, setAxiosOpeningCrawl] =useState([  ]);
    const [ error, setError] = useState("")
    const [ error2, setError2] = useState("")


    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/films/${_id}`)
            .then(res => {
                console.log(res.data);
                setAxiosTitle(res.data.title);
                setAxiosEpisodeId(res.data.episode_id);
                setAxiosReleaseDate(res.data.release_date);
                setAxiosOpeningCrawl(res.data.opening_crawl);
                setError("");
                setError2("");
            })
            .catch((err) => 
            console.log(err),
            setError("Error, This Item Does Not Exist!"),
            setError2("https://cdn.wallpapersafari.com/13/18/BcdxbM.gif")
            );
    }, [_id]); 



    return(
        <div>
        <div style={{textAlign:"left"}} className='Result'>
            <h1 style={{textAlign:"center", marginBottom:0}}> Luke APIWalker Search Results</h1>
            <h3 style={{textAlign:"center", marginTop:0}}>Film Result</h3>
            <hr />
            <img style={{ marginLeft:"15%"}} src={error2} alt="" />
            <p style={{marginLeft:"30%"}}>
                Title:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosTitle} {error}
            </p>
            <p style={{marginLeft:"30%"}}>
                Episode:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosEpisodeId}
            </p>
            <p style={{marginLeft:"30%"}}>
                Release Date:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosReleaseDate}
            </p>
            <p style={{marginLeft:"30%"}}>
                Opening Crawl: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {axiosOpeningCrawl}
            </p>

            
            {/* <p>
                {
                axiosResult.length > 0 && axiosResult.map((axiosObj, index)=>{
                    return (<li key={index}>{axiosObj.name}</li>)
                })}
            </p> */}

            </div>

            <hr />
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <Link to={"/"}>Search Again</Link>
            </div>
        </div>
    )
};

export default APIWalkerFilmsDisplay;