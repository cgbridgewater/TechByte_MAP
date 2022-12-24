import { Link, useParams } from 'react-router-dom';


const Hello = (props) => {
    const { hello } = useParams();
    return(
    <div>
        <h1 style={{color: "green" }}>
            Welcome, your word is: "{ hello }"</h1>
            <hr />
        <Link to={"/"}>Go To Index</Link>
        <br />
        <Link to={"/home"}>Go To Home</Link>

        {/* <br />
        <Link to={"/4"}>Go To 4</Link>
        <br />
        <Link to={"/hello/red/blue"}>Go To Hello/red/blue</Link>
        <br /> */}

    </div>
    )
}

export default Hello;