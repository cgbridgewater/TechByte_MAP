import { Link } from "react-router-dom"

function Login() {

    return (
        <div className="MainContainer">
            <h1 className='Title'>This is a test</h1>
            <h1 className='Title'>Signin Page</h1>
            <Link className="Title"  to="/">Get me outta here!!</Link>
        </div>
    )
}

export default Login