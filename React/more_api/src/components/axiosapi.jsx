import axios from "axios";
import React, { useEffect, useState } from "react";

const GetChuck = (props) => {

    const [ chuckJoke, setChuckJoke ] = useState(null);

    useEffect(() => {
        axios
            .get('https://api.chucknorris.io/jokes/random')
            // .then((response) => console.log("ssss", response.data.value))  <=== use this to test what you're getting back from the api!!!!
            .then(response=>setChuckJoke(response.data.value))
    }, []); //empty array forces useEffect to render ONLY when the component first renders!

    return (
        <div className="ChuckNorris">
            <h3>Tell me a joke about the Great Chuck Norris</h3>
            <p>
            {chuckJoke}
            </p>
        </div>
    );
}



export default GetChuck


