import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const GuessForm = (props) => {
    const [ number , setNumber ] = useState("");
    // const [color2, setColor2] = useState("");
    const navigate = useNavigate();
    const [ errors, setErrors ] = useState([])


    const sendSurvey = (e) => {
        e.preventDefault();   // prevent page refresh
        const errorList = [];  // store array of errors if they exist
        // validation check
        if (number.length <1) {
            errorList.push("Number must contain at least digit!")
        }
        if (errorList.length > 0) {
            setErrors(errorList);
        } else { // if all validations pass run the rest

            // When the user clicks the submit input in the form, 
            //we will navigate to the "/results" path
        navigate("/guess/" + (number) );
        setErrors([]);

        // OOOORRRRR .... When the user clicks submit, they will return to the previous page they were on.
        // navigate(-1);
        }}


        
return (
    <div className='GuessForm'>
        {/* map and display errors if they exist */}
        {errors.map((err, i) => (
            <p className="ErrorText" key={i}>
                {err}
            </p>
        ))}
        {/* form to collect data */}
        <form onSubmit = { sendSurvey }>
            <label>Type a Number or Word:</label>
            <br />
            <input className='Survey'
            type="text" 
            onChange={ (e) => 
            setNumber(e.target.value) } 
            value={ number }
            />
            <br />
            <input className='Button'
            type="submit"
            value="Submit!"
            />
        </form>
    </div>
    );
}

export default GuessForm;