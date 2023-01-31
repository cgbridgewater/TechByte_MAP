import {useEffect} from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
const ShowUsers = props => {
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:8000/api/user", {withCredentials: true})
            .then(response => console.log(response))
            .catch(err => {
                console.log(err)
                props.setAuthorized("You have to be logged in to view that page");
                navigate("/")
            })
    }, [])
    
    
    return(
        <div>
            <h1> show users here!!</h1>
            <Link to="/logout">LOGOUT</Link>

        </div>
    )
}

export default ShowUsers;