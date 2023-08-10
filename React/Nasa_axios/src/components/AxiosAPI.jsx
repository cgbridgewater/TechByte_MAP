import axios from "axios";
import React, { useEffect, useState } from "react";

const GetNasaData = (props) => {
    const Google_API = process.env.REACT_APP_GOOGLE_API;

    const [ nasaData, setNasaData ] = useState([]);
    const [ Sort, setSort ] = useState("ATOZ") 
    const [ nameSearch,setNameSearch] = useState("")
    // const [ yearSearch,setYearSearch] = useState("")
    // const [ massSearch,setMassSearch] = useState("")
    const [ recSearch,setRecSearch] = useState("")
    console.log(recSearch)

//  Sorting
const SortType = { 
    ATOZ: (a,b) => a.name.localeCompare(b.name),
    ZTOA: (a,b) => b.name.localeCompare(a.name),
    OLDEST: (a,b) => a.year > b.year ? 1 : -1,
    NEWEST: (a,b) => a.year < b.year ? 1 : -1,
    LOMASS: (a,b) => a.mass > b.mass ? 1 : -1,
    HIMASS: (a,b) => a.mass < b.mass ? 1 : -1,
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
            <div className="LeftContainer">
                <div className="InputSearches">
                    <input className="Search" type="text" placeholder="Search Name" onChange={(e) => setNameSearch(e.target.value.toLowerCase())} value={nameSearch} />
                    <input className="Search" type="text" placeholder="Search Rec Class" onChange={(e) => setRecSearch(e.target.value.toLowerCase())} value={recSearch} />
                    {/* <input type="text" placeholder="Search Name" onChange={(e) => setNameSearch(e.target.value)} value={nameSearch} /> */}
                    {/* <input type="text" placeholder="Search Name" onChange={(e) => setNameSearch(e.target.value)} value={nameSearch} /> */}

                    <button className="Clear" onClick={(e) => (setNameSearch(""),setRecSearch(""), setSort("ATOZ"))}>Clear Search</button>
                </div>
                <div className="SortBar">
                    <label className="SortLabel" htmlFor="filterpicker">Sort By</label >
                    <select value={Sort} onChange={(e) => setSort(e.target.value)} style={{padding:"3px",width:"175px",textAlign:"center",border:"1px solid yellow", fontSize:"18px", color:"yellow",backgroundColor:"#5B2A5A",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"}}>
                        <option value="ATOZ">A to Z</option>
                        <option value="ZTOA">Z to A</option>
                        <option value="NEWEST">Newest</option>
                        <option value="OLDEST">Oldest</option>
                        <option value="HIMASS">Highest Mass</option>
                        <option value="LOMASS">Lowest Mass</option>
                    </select>
                </div>
                <fieldset className="FilterBox">
                    <li className="Align">
                    <label className="Label" htmlFor="filterpicker">Name A-Z</label>
                    <input className="Radio" type="radio" id="ATOZ" name="filterpicker" value={Sort} onChange={(e) => setSort("ATOZ")} defaultChecked/>
                    </li>
                    
                    <li className="Align">
                    <label className="Label" htmlFor="filterpicker">Name Z-A</label>
                    <input className="Radio" type="radio" id="ZTOA"  name="filterpicker" value={Sort} onChange={(e) => setSort("ZTOA")}/>
                    </li>
                    
                    <li className="Align">
                    <label className="Label" htmlFor="filterpicker">Oldest First</label>
                    <input className="Radio" type="radio" id="OLDEST"  name="filterpicker" value={Sort} onChange={(e) => setSort("OLDEST")}/>
                    </li>
                    
                    <li className="Align">
                    <label className="Label" htmlFor="filterpicker">Newest First</label>
                    <input className="Radio" type="radio" id="NEWEST"  name="filterpicker" value={Sort} onChange={(e) => setSort("NEWEST")}/>
                    </li>
                    
                    <div className="Align">
                    <label className="Label" htmlFor="filterpicker">Highest Mass</label>
                    <input className="Radio" type="radio" id="HiMass"  name="filterpicker" value={Sort} onChange={(e) => setSort("HIMASS")}/>
                    </div>
                    
                    <div className="Align">
                    <label className="Label" htmlFor="filterpicker">Lowest Mass</label>
                    <input className="Radio" type="radio" id="LoMass"  name="filterpicker" value={Sort} onChange={(e) => setSort("LOMASS")}/>
                    </div>
                </fieldset>
            </div>

            <div className="MapBox">

                    <h1>Map goes here</h1>
                {/* <!-- google MAP --> */}
                    <iframe
                        title='googleMap'
                        style={{height:"500px", width:"500px"}}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/place?key=`+ Google_API +
                        `&q=USA`}>
                    </iframe>
                {/* <!-- end google MAP --> */}
            </div>

            <div className="DataContainer">
                {
                    nasaData.length > 0 &&[...nasaData] 
                    .sort(SortType[Sort])
                    .filter((nasaObj) => {
                        return nameSearch.toLowerCase() === '' ? nasaObj : nasaObj.name.toLowerCase().includes(nameSearch) 
                    })
                    .filter((nasaObj) => {
                        return recSearch.toLowerCase() === '' ? nasaObj : nasaObj.recclass.toLowerCase().includes(recSearch) 
                    })
                    .map((nasaObj)=>{
                        const date = new Date(nasaObj.year)
                        const year = date.getFullYear();
                    return (
                    
                    <p key={nasaObj.id}> Name: {nasaObj.name} , Year: {year}, <br />RecClass: {nasaObj.recclass} , Mass: {nasaObj.mass}</p>)
                })}
            </div>
        </div>
    );
}

export default GetNasaData;
