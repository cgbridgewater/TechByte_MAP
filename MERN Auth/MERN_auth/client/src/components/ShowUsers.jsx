import '../css/Show.css'
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
const ShowUsers = props => {

    const [state, setState] = useState ({
        register: {
            firstName: "",
            lastName: "",
            email:"",
        }
    });

    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:8000/api/user", {withCredentials: true})
            .then(res => {
                console.log(res.data)
                setState(res.data)
                // setLastName(res.data)
                // setEmail(res.data)
            })
            .catch(err => {
                console.log(err)
                props.setAuthorized("Please Log In!");  // Sends back to main page with this message
                navigate("/")
            })
    }, [])
    
    
    return(
        <div className='ShowContainer'>

            <div className='ShowHeader'>
                <div>{/* spacer */} </div>
                <h1 id='ShowH1'>🍪 Cookies & Users 🍪</h1>
                <Link to="/logout">LOGOUT</Link>
            </div>

            <div className='UserContainer'>
                {/* start mapping */}
                {state.length > 0 && [...state]
                    .map((user, index) => {
                        return(
                            <div className='Users'>
                                <p>Name - {user.firstName} {user.lastName}</p>
                                <p>Email - {user.email}</p>
                            </div>
                )})}
            </div>



        </div>

    )
}

export default ShowUsers;