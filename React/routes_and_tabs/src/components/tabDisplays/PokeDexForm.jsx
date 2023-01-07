import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const PokeDexForm = (props) => {
    
    const navigate = useNavigate();
    const [ _id, setId ] = useState("");
    const [ catagory , setCatagory ] = useState("");
    const [ errors, setErrors ] = useState([]);

    const sendSurvey = (e) => {
        e.preventDefault();   // prevent page refresh
        const errorList = [];  // store array of errors if they exist
        // validation check
        // if (_id.length <1) {
        //     errorList.push("ID must contain at least 1 number!")
        // }
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
            <h1 className='PokeDexTitle'>Pokédex</h1>
            <hr className='PokedexHr' />
            {/* select catagory for search */}
            <label>Search by name or number:</label>
            <input className='FormInput' class_id='Survey'
            type="text" 
            onChange={ (e) => 
            setCatagory(e.target.value) } 
            value={ catagory }
            />
            {/* <br /> */}

            {/* form submit button */}
            <input className="FormButton" class_id='Button'
            type="submit"
            value="Submit!"
            />
        </form>
        <button className='RandomPick'>Pick One For Me!!</button>
    </div>
    );
}

export default PokeDexForm;