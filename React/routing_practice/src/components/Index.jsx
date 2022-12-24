import { Link } from 'react-router-dom';
// import Form_4 from './Form_4';
// import Form_Hello from './Form_Hello';
import FormHelloColors from './Form_HelloColors';


const Index = (props) => {
    return(
    <div>

        <FormHelloColors />
        <hr />
        <Link to={"/home"}>Go To Home Page</Link>
        {/* <hr /> */}
        {/* <Form_Hello />
        <hr />
        <h2>OR</h2>
        <hr /> */}
        {/* <h2>OR</h2>
        <hr />
        <Form_4 />   */}
        {/* <hr />
        <h2>OR</h2>
        <hr /> */}


{/* 
        <Link to={"/4"}>Go To 4</Link>
        <br />
        <Link to={"/hello"}>Go To Hello</Link>
        <br />
        <Link to={"/hello/red/blue"}>Go To Hello/red/blue</Link>
        <br /> */}

    </div>
    )
}

export default Index;