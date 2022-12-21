import axios from "axios";
import React, { useEffect, useState } from "react";

const GetChuck = (props) => {

    const [ chuck, setChuck ] = useState(false);
    const [ chuckJoke, setChuckJoke ] = useState(null);

    const getData = (e) => {
        e.preventDefault();
            axios
                .get('https://api.chucknorris.io/jokes/random')
                // .then((response) => console.log("ssss", response.data.value))  <=== use this to test what you're getting back from the api!!!!
                .then(response=>setChuckJoke(response.data.value))
    }; 

    return (
        <div className="ChuckNorris">
            <h3>Feeling Lucky On The ChuckNorris API?</h3>
            <button className="ChuckButton"
            onClick={getData}
            type="button"
            >Yeah, Roll The Dice!</button>
            <p>
            {chuckJoke}
            </p>
        </div>
    );
}



export default GetChuck


