import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LukeAPIForm = (props) => {
    
    const navigate = useNavigate();
    const [ _id, setId ] = useState("");
    const [ catagory , setCatagory ] = useState("");
    const [ errors, setErrors ] = useState([]);

    const sendSurvey = (e) => {
        e.preventDefault();   // prevent page refresh
        const errorList = [];  // store array of errors if they exist
        // validation check
        if (_id.length <1) {
            errorList.push("ID must contain at least 1 number!")
        }
        if (catagory.length === 0 ) { 
            errorList.push("Please select catagory!")
        }
        if (errorList.length > 0) {
            setErrors(errorList);
        } else { // if all validations pass run the rest
            // When the user clicks the submit input in the form, this will navigate to the "/results" path
            navigate(`/${catagory}/${_id}`);
            // navigate("/" + ( catagory ) + "/" + ( _id ));
            setErrors([]);
        // OOOORRRRR .... When the user clicks submit, they will return to the previous page they were on.
        // navigate(-1);
        }}

return (
    <div>
        
        {/* map and display errors if they exist */}
        {errors.map((err, i) => (
            <p class_id="ErrorText" key={i}>
                {err}
            </p>
        ))}

        {/* form to collect data */}
        <form className='Form' onSubmit = { sendSurvey }>
            <h1 style={{marginBottom:"0px"}}>Welcome To The Luke APIWalker</h1>
            <h3 style={{marginBottom:"5px", marginTop:"0px"}}>Query Form</h3>
            <hr />

            {/* select catagory for search */}
            <label style={{marginRight:"10px"}}>Search For:</label>
            <select 
                onChange={ (e) => 
                setCatagory(e.target.value) } 
                value={ catagory }
                style={{marginBottom:"5px", border:"3px solid brown", borderRadius:"5px"}}
            >
                <option value="" disabled hidden >-- select catagory --</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="films">Films</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
                <option value="species">Species</option>
            </select>
            <br />

            {/* user _id input */}
            <label style={{marginRight:"10px"}}>Search For:</label>
            <input class_id='Survey'
            type="number" 
            min={1}
            onChange={ (e) => 
            setId(e.target.value) } 
            value={ _id }
            style={{marginBottom:"5px"}}
            />
            <br />

            {/* form submit button */}
            <input class_id='Button'
            style={{padding:"5px"}}
            type="submit"
            value="Submit!"
            />
        </form>
    </div>
    );
}

export default LukeAPIForm;