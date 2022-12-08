import React, { useState } from "react";

const Form = (props) => {
    // using the getter and setter that were passed from my parent (App.js) component
    const { wordArray, setWordArray } = props;

    // create state that can only be seen by this component
    // this is the state to keep track of the text box input value
    const [ myWords, setMyWords] = useState("");
    const [ color, setColor] = useState("grey");
    const [ size, setSize] = useState(50);

    const submitHandler = (event) => {
    // we must prevent the browser from refreshing the page when a form is submitted
    // if we do not prevent the default behavior we will lose all values in state
    event.preventDefault();
    // add our new word to the wordarray WITHOUT losing what is already in there
    // we need to create a new array and spread out the current values first
    // then we add the new object as the last element in the array
    setWordArray( [ ...wordArray, 
        // add an object to the end of the array
        {
            myWords: myWords,
            color:color,
            size:size + "px"
        }
    ] );
    setMyWords("");
    setColor("");
    setSize("");
    }


    
    return(
        <div style={{backgroundColor:"silver"}}>
            <form onSubmit={ submitHandler } style={{ margin: "20px" }} >
                <div>
                    <h1 htmlFor="myWords">Here We Can Submit A Word</h1>
                    <br />
                    <label>Input Your Word</label>
                    <input 
                    type="text" 
                    name="myWords" 
                    value={myWords}
                    onChange={(e)=> setMyWords(e.target.value) } 
                    />
                    <br />
                    <label>Pick A Color</label>
                    <input 
                    type="text" 
                    name="color"
                    value={color}
                    onChange={ (e) => setColor(e.target.value) }
                    />
                    <br />
                    <label>Width and Height in Pixels</label>
                    <input 
                        type="text" 
                        name="size"
                        value={size}
                        onChange={ (e) => setSize(e.target.value) }
                    />
                </div>
                <button style={{ backgroundColor: "yellow", borderColor: "yellow", marginBottom: "20px" }}>Submit</button>
            </form>
        </div>
    )
}


export default Form;