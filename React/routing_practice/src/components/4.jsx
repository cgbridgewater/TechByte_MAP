import { Link, useParams } from 'react-router-dom';


const Four = (props) => {
    const { hello } = useParams();
    return(
    <div>
        <h1 style={{color: "green" }}>
            Welcome to { hello }!</h1>

        <Link to={"/"}>Go To Index</Link>
        <br />
        <Link to={"/home"}>Go To Home</Link>


        












        {/* <br />
        <Link to={"/hello"}>Go To Hello</Link>
        <br />
        <Link to={"/hello/red/blue"}>Go To Hello/red/blue</Link>
        <br /> */}
    </div>
    )
}

export default Four;