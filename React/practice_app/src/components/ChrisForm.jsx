import React, { useState } from "react";

const ChrisForm = (props) => {
    const { wordArray, setWordArray } = props;
    const [ myWords, setMyWords] = useState("");
    const [ color, setColor] = useState("grey");
    const [ border, setBorder] = useState("red");
    const [errors, setErrors] = useState([]);
    
    const submitHandler = (e) => {
    e.preventDefault();
    const errorList = [];
        // validation check
    if (myWords.length < 3) {
        errorList.push("Word must be at least 3 characters");
    }
    if (color.length < 3) {
        errorList.push("Color must be at least 3 characters");
    }
    if (border.length < 3) {
        errorList.push("Border Color must be at least 3 characters");
    }
    // if validation errors exist set error trigger
    if (errorList.length > 0) {
        setErrors(errorList);
    } 
    // if validations pass, handle the submit
    else {
        setMyWords("");
        setColor("");
        setBorder("");
        setErrors([]);
        setWordArray( [ ...wordArray, 
            {
                myWords,
                color,
                border
            }
            ] );
        }
    }


    return(
        <div style={{backgroundColor:"silver"}}>
                    {errors.map((err, i) => (
                <p className="text-danger" key={i}>
                    {err}
                </p>
            ))}
            <form onSubmit={ submitHandler } style={{ margin: "20px" }} >
                <div>
                    <h1 htmlFor="myWords">Here We Can Submit A Word, Background Color And Border Color</h1>
                    <br />
                    <label>Give A Word</label>
                    <input 
                    type="text" 
                    name="myWords" 
                    value={myWords}
                    onChange={(e)=> setMyWords(e.target.value) } 
                    />
                    <br />
                    <label>Pick A Background Color</label>
                    <input 
                    type="text" 
                    name="color"
                    value={color}
                    onChange={ (e) => setColor(e.target.value) }
                    />
                    <br />
                    <label>Pick A Border Color</label>
                    <input 
                        type="text" 
                        name="border"
                        value={border}
                        onChange={ (e) => setBorder(e.target.value) }
                    />
                </div>
                <button style={{ backgroundColor: "yellow", borderColor: "yellow", marginBottom: "20px" }}>Submit</button>
            </form>
        </div>
    )
}


export default ChrisForm;