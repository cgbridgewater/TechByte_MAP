import { Link } from 'react-router-dom';


const Four = (props) => {
    return(
    <div>
        <h1 style={{color: "green" }}>
            4 Component Page
        </h1>
        <Link to={"/"}>Go To Index</Link>
        <br />
        <Link to={"/home"}>Go To Home</Link>
        <br />
        <Link to={"/hello"}>Go To Hello</Link>
        <br />
        <Link to={"/hello/red/blue"}>Go To Hello/red/blue</Link>
        <br />
    </div>
    )
}

export default Four;