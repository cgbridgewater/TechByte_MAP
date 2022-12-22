import { Link } from 'react-router-dom';
import Survey from './Survey';


const Results = (props) => {
    return(
    <div>
        <h1 style={{color: "Green" }}>
        Results Component
        </h1>
        <Link to={"/"}>Go Home</Link>   

    </div>
    )
}

export default Results