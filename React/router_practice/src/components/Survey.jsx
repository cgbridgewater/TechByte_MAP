import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Survey = (props) => {
    const [ myName, setMyName ] = useState("");
    const [comment, setComment] = useState("");
    const navigate = useNavigate();

    const sendSurvey = (e) => {
        e.preventDefault();
            // When the user clicks the submit input in the form, 
            //we will navigate to the "/results" path
        navigate("/results");
            
        // OOOORRRRR .... When the user clicks submit, they will return to the previous page they were on.
        // navigate(-1);
    }


return (
    <form onSubmit = { sendSurvey }>
        <label>Your Name:</label>
        <input className='Survey'
        type="text" 
        onChange={ (e) => 
        setMyName(e.target.value) } 
        value={ myName }
        />
        <br />
        <label>Your Comment:</label>
        <input className='Survey'
        onChange={ (e) => setComment(e.target.value) } 
        value={ comment }
        ></input>
        <br />
        <input className='SurveyButton'
        type="submit"
        value="Submit Survey"
        />
    </form>
    );
}

export default Survey;