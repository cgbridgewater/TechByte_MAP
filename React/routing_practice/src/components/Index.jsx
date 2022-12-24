import { Link } from 'react-router-dom';
import FormHelloColors from './HelloColorsForm';
import GuessForm from './GuessForm';


const Index = (props) => {
    return(
    <div>
        <FormHelloColors />
        <hr />
        <GuessForm />
        <hr />
        <Link to={"/home"}>Go To Home Page</Link>
    </div>
    )
}

export default Index;