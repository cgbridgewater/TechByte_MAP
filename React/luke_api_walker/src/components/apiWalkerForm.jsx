import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LukeAPIForm = (props) => {

    const [ name, setName ] = useState("");
    const [ word , setWord ] = useState("");
    const [ color1 , setColor1 ] = useState("");
    const [color2, setColor2] = useState("");
    const navigate = useNavigate();
    const [ errors, setErrors ] = useState([]);
    const sendSurvey = (e) => {
        e.preventDefault();   // prevent page refresh
        const errorList = [];  // store array of errors if they exist
        // validation check
        if (name.length <2) {
            errorList.push("Name must contain at least 2 characters!")
        }
        if (word.length <2) {
            errorList.push("Word must contain at least 2 characters!")
        }
        if (color1.length === 0 && (color2.length > 2)  ) {
            errorList.push("Color 1 must not be empty if color 2 is submitted!")
        }
        if (errorList.length > 0) {
            setErrors(errorList);
        } else { // if all validations pass run the rest
            // When the user clicks the submit input in the form, this will navigate to the "/results" path
            navigate("/" + (name) + "/" + (word) + "/" + (color1) + "/" + (color2));
            setErrors([]);
        // OOOORRRRR .... When the user clicks submit, they will return to the previous page they were on.
        // navigate(-1);
        }}


return (
    <div>
        {/* map and display errors if they exist */}
        {errors.map((err, i) => (
            <p className="ErrorText" key={i}>
                {err}
            </p>
        ))}
        {/* form to collect data */}
        <form className='EntryForm' onSubmit = { sendSurvey }>

            {/* user name input */}
            <label>User Name:</label>
            <input className='Survey'
            type="text" 
            onChange={ (e) => 
            setName(e.target.value) } 
            value={ name }
            />
            <br />

            {/* comment input */}
            <label>Make a comment:</label>
            <input className='Survey'
            type="text" 
            onChange={ (e) => 
            setWord(e.target.value) } 
            value={ word }
            />
            <br />

            {/* select text color (color1) */}
            <label>Select Text Color:</label>
            <select 
                onChange={ (e) => 
                setColor1(e.target.value) } 
                value={ color1 }
                style={{backgroundColor:(color1)}}
            >
                <option value="" selected disabled hidden style={{ backgroundColor:""}}>-- select color --</option>
                <option style={{ backgroundColor:"red", color:"white"  }} value="red"></option>
                <option style={{ backgroundColor:"blue", color:"white"  }} value="blue"></option>
                <option style={{ backgroundColor:"green", color:"white"  }} value="green"></option>
                <option style={{ backgroundColor:"yellow" }} value="yellow"></option>
                <option style={{ backgroundColor:"white" }} value="white"></option>
                <option style={{ backgroundColor:"black", color:"white" }} value="black"></option>
                <option style={{ backgroundColor:"pink" }} value="pink"></option>
                <option style={{ backgroundColor:"purple", color:"white"  }} value="purple"></option>
                <option style={{ backgroundColor:"orange", color:"white"  }} value="orange"></option>
                <option style={{ backgroundColor:"gold" }} value="gold"></option>
            </select>
            <br />

            {/* background color select (color2) */}
            <label>Select Background Color:</label>
            <select 
                onChange={ (e) =>   
                setColor2(e.target.value) } 
                value={ color2 }
                style={{backgroundColor:(color2)}}
            >
                <option value="" selected disabled hidden style={{ backgroundColor:""}}>-- select color --</option>
                <option style={{ backgroundColor:"red", color:"white"  }} value="red"></option>
                <option style={{ backgroundColor:"blue", color:"white"  }} value="blue"></option>
                <option style={{ backgroundColor:"green", color:"white"  }} value="green"></option>
                <option style={{ backgroundColor:"yellow" }} value="yellow"></option>
                <option style={{ backgroundColor:"white" }} value="white"></option>
                <option style={{ backgroundColor:"black", color:"white" }} value="black"></option>
                <option style={{ backgroundColor:"pink" }} value="pink"></option>
                <option style={{ backgroundColor:"purple", color:"white"  }} value="purple"></option>
                <option style={{ backgroundColor:"orange", color:"white"  }} value="orange"></option>
                <option style={{ backgroundColor:"gold" }} value="gold"></option>
            </select>
            <br />
            
            {/* form submit button */}
            <input className='Button'
            type="submit"
            value="Submit!"
            />
        </form>
    </div>
    );
}

export default LukeAPIForm;