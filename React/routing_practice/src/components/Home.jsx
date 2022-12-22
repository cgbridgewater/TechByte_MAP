import { Link } from 'react-router-dom';


const Home = (props) => {
    return(
    <div>
        <h1 style={{color: "darkBlue" }}>
            Home Component Page
        </h1>
        <Link to={"/"}>Go To Index</Link>
        <br />
        <Link to={"/4"}>Go To 4</Link>
        <br />
        <Link to={"/hello"}>Go To Hello</Link>
        <br />
        <Link to={"/hello/red/blue"}>Go To Hello/red/blue</Link>
        <br />

    </div>
    )
}

export default Home;