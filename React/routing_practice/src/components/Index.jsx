import { Link } from 'react-router-dom';


const Index = (props) => {
    return(
    <div>
        <h1 style={{color: "red" }}>
            Index Component Page
        </h1>
        <Link to={"/4"}>Go To 4</Link>
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

export default Index;