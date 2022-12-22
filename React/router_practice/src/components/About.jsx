import { Link } from 'react-router-dom';
import Survey from './Survey';


const About = (props) => {
    return(
    <div>
        <h1 style={{color: "blue" }}>
        About Component
        </h1>
        <Link to={"/"}>Go Home</Link>   

        <Survey />

    </div>
    )
}

export default About