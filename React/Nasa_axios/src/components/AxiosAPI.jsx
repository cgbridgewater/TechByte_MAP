import axios from "axios";
import React, { useEffect, useState } from "react";

const GetNasaData = (props) => {

    const [ nasaData, setNasaData ] = useState([]);
    const [ Sort, setSort ] = useState("ATOZ") 

//  Sorting
const SortType = { 
    ATOZ: (a,b) => a.name.localeCompare(b.name),
    ZTOA: (a,b) => b.name.localeCompare(a.name),
    OLDEST: (a,b) => a.year > b.year ? 1 : -1,
    NEWEST: (a,b) => a.year < b.year ? 1 : -1,
}

    useEffect(() => {
        axios
            .get('https://data.nasa.gov/resource/gh4g-9sfh.json')    
            .then(res => {
                console.log("All Fireball Strikes",res.data);
                setNasaData(res.data);
            })
            .catch((err) => console.log(err));
    }, []); 



    return (
        
        <div className="Nasa">
            <div className="SortBar">
                <select value={Sort} onChange={(e) => setSort(e.target.value)} style={{padding:"3px",width:"175px",textAlign:"center",border:"1px solid yellow", fontSize:"18px", color:"yellow",backgroundColor:"#5B2A5A",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"}}>
                    <option value="ATOZ">A to Z</option>
                    <option value="ZTOA">Z to A</option>
                    <option value="NEWEST">Newest</option>
                    <option value="OLDEST">Oldest</option>
                </select>
            </div>
            
            <p>
                {
                nasaData.length > 0 &&[...nasaData] 
                    .sort(SortType[Sort])
                    .map((nasaObj, index)=>{
                    const date = new Date(nasaObj.year)
                    const year = date.getFullYear();
                    return (
                    
                    <li key={index}> Name: {nasaObj.name}, RecClass: {nasaObj.recclass}, Mass: {nasaObj.mass}, Year: {year} </li>)
                })}
            </p>
        </div>
    );
}

export default GetNasaData;
