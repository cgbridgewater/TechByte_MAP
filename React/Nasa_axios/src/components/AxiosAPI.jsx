import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

import 'toolcool-range-slider/dist/plugins/tcrs-storage.min.js';
import 'toolcool-range-slider/dist/plugins/tcrs-generated-labels.min.js';
import 'toolcool-range-slider/dist/plugins/tcrs-binding-labels.min.js';
import 'toolcool-range-slider/dist/plugins/tcrs-moving-tooltip.min.js';
import 'toolcool-range-slider';

import Map from "./Map";
import Loader from "./Loader";
import Header from "./Header";
import Table from "./Table";



const GetNasaData = (props) => {

    const [ loading, setLoading] = useState(false)
    const [ nasaData, setNasaData ] = useState([]);
    const [ Sort, setSort ] = useState("ATOZ");
    const [ nameSearch,setNameSearch] = useState("");
    const [ recSearch,setRecSearch] = useState("");
    const [ massSliderV1, setMassSliderV1 ] = useState(0);
    const [ massSliderV2, setMassSliderV2 ] = useState(23000000);
    const [ yearSliderV1, setYearSliderV1 ] = useState(500);
    const [ yearSliderV2, setYearSliderV2 ] = useState(2023);
    const [isMassActive, setIsMassActive] = useState(false);
    // const newLocation = [];
    // // console.log("Locations: ", newLocation)
    // const latLong = [];
    // // console.log("lat and long :", latLong)
    
    


//  Sorting Functions for radios
const SortType = { 
    ATOZ: (a,b) => a.name.localeCompare(b.name),
    ZTOA: (a,b) => b.name.localeCompare(a.name),
    OLDEST: (a,b) => a.year > b.year ? 1 : -1,
    NEWEST: (a,b) => a.year < b.year ? 1 : -1,
    LOMASS: (a,b) => {    
        // equal items sort equally
        if (a.mass === b) {
            return 0;
        }
        // nulls and ydefuned sort after anything else
        if (a.mass === null || a.mass === undefined) {
            return 1;
        }
        if (b.mass === null || b.mass === undefined ) {
            return -1;
        }
        // compare whats left
        return a.mass - b.mass
    },
    HIMASS: (a,b) =>
    {    // equal items sort equally
        if (a.mass === b.mass) {
            return 0;
        }
        // nulls and undefined sort after anything else
        if (a.mass === null || a.mass === undefined) {
            return 1;
        }
        if (b.mass === null || b.mass === undefined) {
            return -1;
        }
        // compare whats left
        return b.mass - a.mass
    }
};

    // API Data Fetch //
useEffect(() => {
    axios
        .get('https://data.nasa.gov/resource/gh4g-9sfh.json')    
        .then(res => {
            console.log("All Fireball Strikes",res.data);
            setNasaData(res.data);
            setLoading(false);
        })
        .catch((err) => console.log(err));
    }, []); 
    


    // YEAR Slider //
    const yearSliderRef = useRef(null);
    useEffect(() => {
        const slider = yearSliderRef.current;
        const onChange = (e) => {
            setYearSliderV1(e.detail.value1)
            setYearSliderV2(e.detail.value2)
        };
        slider?.addEventListener('change', onChange);
        return () => {
            slider?.removeEventListener('change', onChange);
        };
    }, []);
    
    
    // MASS Slider //
    const massSliderRef = useRef(null);
    useEffect(() => {
        const slider = massSliderRef.current;
        const onChange = (e) => {
            setMassSliderV1(e.detail.value1)
            setMassSliderV2(e.detail.value2)
            setIsMassActive(true);
        };
        slider?.addEventListener('change', onChange);
        return () => {
            slider?.removeEventListener('change', onChange);
        };
    }, []);
    
    
    // Reset sorts and filters back to default //
    function resetFilters() {
        const slider = document.getElementById('MassSlider');
        slider.value1 = 0;
        slider.value2 = 23000000;
        const slider2 = document.getElementById('YearSlider');
        slider2.value1 = 500;
        slider2.value2 = 2023;
        document.getElementById("ATOZ").checked = true;
        setNameSearch("");
        setRecSearch(""); 
        setSort("ATOZ");
        setIsMassActive(false);
    }; 
    
                            // .sort(SortType[Sort])
                        // .filter((nasaObj) => {
                        //     return nameSearch.toLowerCase() === '' ? nasaObj : nasaObj.name.toLowerCase().includes(nameSearch) 
                        // })
                        // .filter((nasaObj) => {
                        //     return recSearch.toLowerCase() === '' ? nasaObj : nasaObj.recclass.toLowerCase().includes(recSearch) 
                        // })
    // // // FILTER AND SORT FUNCTIONS // // //

    //filter Mass with inputs from slider
    function filterMass(nasaData){
        return nasaData.mass > massSliderV1 && nasaData.mass < massSliderV2 ;
    }

    // filter Year with inputs from slider
    function filterYear(nasaData) {
        const date = new Date(nasaData.year)
        const year = date.getFullYear();
        return year > yearSliderV1 && year < yearSliderV2;
    }

    // filter name with text input
    function filterName(nasaData){
        return nameSearch.toLowerCase() === '' ? nasaData : nasaData.name.toLowerCase().includes(nameSearch);
    }

    // filter Rec Class with text input
    function filterRecClass(nasaData){
        return recSearch.toLowerCase() === '' ? nasaData : nasaData.recclass.toLowerCase().includes(recSearch);
    }




    // manipulate data variable  //
    // const filtered = [...nasaData].filter(filterYear).filter(filterName).filter(filterRecClass).filter(filterMass)
    
    const filtered = (isMassActive === false ?  [...nasaData].filter(filterYear).filter(filterName).filter(filterRecClass) : [...nasaData].filter(filterYear).filter(filterName).filter(filterRecClass).filter(filterMass))
    // const filtered = [...nasaData].filter(filterYear).filter(filterMass).filter(filterName).filter(filterRecClass).sort(SortType[Sort])
    
    console.log(isMassActive)


    // display for testing filtered data results in console
    console.log("filtered: ",filtered)
    // console.log("sort: ", SortType[Sort])






    return (
        // Project Container
        <div>
            {/* header */}
            <Header/>
            <div className="Nasa">
                {/* Left Data Container */}
                <div className="LeftContainer">
                {/* Mass Filter */}
                <div className="SliderBox">

                    {/* Mass Slider */}
                    <div className="SliderContainer">
                        <tc-range-slider
                            className="Slider"
                            id="MassSlider"
                            ref={ massSliderRef }
                            value-label="#value-1"
                            value2-label="#value-2"
                            range-dragging="true"
                            data="0,20,40,60,80,100,200,400,600,800,1000,1500,2000,3000,4000,5000,6000,7000,8000,10000,12500,15000,20000,30000,40000,50000,80000,100000,120000,150000,200000,250000,300000,330000,408000,500000,600000,1100000,2000000,4000000,23000000"
                            value1="0"
                            value2="23000000"
                            round="0"
                            min="0" 
                            max="23000000" 
                            // STYLE //
                            slider-width="100%"
                            slider-height="5px"
                            pointer-width="20px"
                            pointer-height="20px"
                            pointer-radius="5px"
                            pointer-bg="red"
                            pointer-bg-hover="red"
                            pointer-bg-focus="red"
                            slider-bg-fill="yellow"
                            slider-bg="silver"
                            moving-tooltip="true"
                            moving-tooltip-distance-to-pointer="30"
                            moving-tooltip-width="55"
                            moving-tooltip-height="20"
                            moving-tooltip-bg="#721d82"
                            moving-tooltip-text-color="#efefef"
                            pointer1-shadow-focus =	"0 0 20px yellow"
                            pointer2-shadow-focus =	"0 0 20px yellow"
                            pointer1-shadow-hover =	"0 0 20px yellow"
                            pointer2-shadow-hover =	"0 0 20px yellow"
                            pointer-border="1px solid black"
                            pointer-border-hover="2px solid yellow"
                            pointer-border-focus="2px solid yellow"
                        >
                        </tc-range-slider>
                        {/* Mass Label and Selected Values */}
                        <div className="TextValueContainer">
                            <h5 className="TextValueTitle">Filter Mass Range</h5>
                            {/* <p className="TextValue">Start: {massSliderV1}</p>
                            <p className="TextValue">End: {massSliderV2}</p> */}
                        </div>
                    </div>
                </div>

                    {/* Year Filter */}
                    <div className="SliderBox">
                        {/* Year Slider */}
                        <div className="SliderContainer2">
                            <div className="TextValueContainer">
                                <h5 className="TextValueTitle">Year &nbsp;&nbsp;&nbsp;&nbsp;{yearSliderV1}-{yearSliderV2}</h5>
                                {/* <p className="TextValue">Start : &nbsp;</p>
                                <p className="TextValue">End : </p> */}
                            </div>
                            <tc-range-slider
                                id="YearSlider"
                                ref={ yearSliderRef }
                                value-label="#value-1"
                                value2-label="#value-2"
                                range-dragging="true"
                                data="800,1350,1475,1500,1600,1650,1700,1725,1750,1775,1800,1825,1850,1875,1900,1910,1920,1930,1940,1950,1960,1970,1980,1990,2000,2005,2010,2015,2023"
                                value1="800"
                                value2="2023"
                                round="0"
                                min="500" 
                                max="2023" 
                                // STYLE //
                                slider-width="100%"
                                slider-height="5px"
                                pointer-width="20px"
                                pointer-height="20px"
                                pointer-radius="5px"
                                pointer-bg="red"
                                pointer-bg-hover="red"
                                pointer-bg-focus="red"
                                slider-bg-fill="yellow"
                                slider-bg-hover="silver" 
                                // moving-tooltip="true"
                                // moving-tooltip-distance-to-pointer="30"
                                // moving-tooltip-width="35"
                                // moving-tooltip-height="20"
                                // moving-tooltip-bg="#721d82"
                                // moving-tooltip-text-color="#efefef"
                                pointer1-shadow-focus =	"0 0 20px yellow"
                                pointer2-shadow-focus =	"0 0 20px yellow"
                                pointer1-shadow-hover =	"0 0 20px yellow"
                                pointer2-shadow-hover =	"0 0 20px yellow"
                                pointer-border="1px solid black"
                                pointer-border-hover="2px solid yellow"
                                pointer-border-focus="2px solid yellow"
                            >
                            </tc-range-slider>
                        </div>
                        {/* Year Label and Selected Values */}
                    </div>

                    {/* Sorting Drop Down NOT IN USE */}
                    <div  className="SortBar">
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

                    {/* Radio Sort Boxes */}
                    <fieldset className="FilterBox">
                        {/* Name Sort A-Z */}
                        <li className="Align">
                            <label className="Label" htmlFor="filterpicker">Name A-Z</label>
                            <input className="Radio" type="radio" id="ATOZ" name="filterpicker" value={Sort} onChange={(e) => setSort("ATOZ")} defaultChecked/>
                        </li>
                        {/* Name Sort Z-A */}
                        <li className="Align">
                            <label className="Label" htmlFor="filterpicker">Name Z-A</label>
                            <input className="Radio" type="radio" id="ZTOA"  name="filterpicker" value={Sort} onChange={(e) => setSort("ZTOA")}/>
                        </li>
                        {/* Date Sort Oldest First */}
                        <li className="Align">
                            <label className="Label" htmlFor="filterpicker">Oldest First</label>
                            <input className="Radio" type="radio" id="OLDEST"  name="filterpicker" value={Sort} onChange={(e) => setSort("OLDEST")}/>
                        </li>
                        {/* Date Sort Newest First */}
                        <li className="Align">
                            <label className="Label" htmlFor="filterpicker">Newest First</label>
                            <input className="Radio" type="radio" id="NEWEST"  name="filterpicker" value={Sort} onChange={(e) => setSort("NEWEST")}/>
                        </li>
                        {/* Mass Sort Highest First */}
                        <div className="Align">
                            <label className="Label" htmlFor="filterpicker">Highest Mass</label>
                            <input className="Radio" type="radio" id="HiMass"  name="filterpicker" value={Sort} onChange={(e) => setSort("HIMASS")}/>
                        </div>
                        {/* Mass Sort Lowest First */}
                        <div className="Align">
                            <label className="Label" htmlFor="filterpicker">Lowest Mass</label>
                            <input className="Radio" type="radio" id="LoMass"  name="filterpicker" value={Sort} onChange={(e) => setSort("LOMASS")}/>
                        </div>
                    </fieldset>
                    
                    {/* Filter By Typing Input Fields */}
                    <div className="InputSearches">
                        <div className="Searches">
                            <input className="Search" type="text" placeholder="Filter Name" onChange={(e) => setNameSearch(e.target.value.toLowerCase())} value={nameSearch} />
                            <input className="Search" type="text" placeholder="Filter Rec Class" onChange={(e) => setRecSearch(e.target.value.toLowerCase())} value={recSearch} />
                            {/* <input className="Search" type="text" placeholder="Filter Year" onChange={(e) => setYearSearch(e.target.value)} value={yearSearch} />
                            <input className="Search" type="text" placeholder="Filter Mass" onChange={(e) => setMassSearch(e.target.value)} value={massSearch} /> */}
                            {/* Clear All Filters Button */}
                            <button className="Clear" onClick={(e) => (resetFilters())}>Reset All Filters</button>
                        </div>
                    </div>
                </div>

                {/* Map Container */}
                <div className="MapBox">
                    {/* <!-- google MAP --> */}
                        {/* <iframe
                            className="GoogleMap"
                            title='googleMap'
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=`+ Google_API +
                            `&q= north america `}
                            >
                        </iframe> */}
                    {/* <!-- end google MAP --> */}
                    {!loading ? <Map nasaData={nasaData} yearSliderV1={yearSliderV1} yearSliderV2={yearSliderV2}  /> : <Loader /> }
                </div>






                {/* API Results Container */}
                {/* <div className="DataContainer">
                    {
                        filtered.map((nasaObj)=>{

                            const date = new Date(nasaObj.year)
                            const year = date.getFullYear();

                            return (
                        <div>
                            <p className="Results" key={nasaObj.id}> Name: {nasaObj.name} , Year: {year}, <br />RecClass: {nasaObj.recclass} , Mass: {nasaObj.mass}</p>
                        </div>
                            )
                        })}
                </div> */}

                <Table results={filtered}/>


            </div>
        </div>
    );
}

export default GetNasaData;
