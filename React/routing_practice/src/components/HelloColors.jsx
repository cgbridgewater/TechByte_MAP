import { Link } from 'react-router-dom';


const HelloColors = (props) => {
    return(
    <div>
        <h1 style={{color: "red" }}>
            Hello Red and Blue Component Page
        </h1>
        <Link to={"/"}>Go To Index</Link>
        <br />
        <Link to={"/home"}>Go To Home</Link>
        <br />
        <Link to={"/4"}>Go To 4</Link>
        <br />
        <Link to={"/hello"}>Go To Hello</Link>
        <br />

    </div>
    )
}

export default HelloColors;