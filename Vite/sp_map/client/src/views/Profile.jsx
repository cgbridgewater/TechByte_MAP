import { Link } from "react-router-dom"

function Profile() {

    return (
        <div className="MainContainer">
        <h1 className='Title'>This is a test</h1>
        <h1 className='Title'>Profile Page</h1>
        <Link className="Title"  to="/">Get me outta here!!</Link>
    </div>
    )
}

export default Profile