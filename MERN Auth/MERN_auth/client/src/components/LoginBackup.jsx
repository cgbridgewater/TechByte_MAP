import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const LoginPage = props => {

    const [state, setState] = useState ({
        register: {
            firstName: "",
            lastName: "",
            email:"",
            password:"",
            confirmPassword:""
 
        },
        login: {
            email:"",
            password:""
        }
    });

    const {register, login} = state;
    const navigate = useNavigate()

    const handleRegInputs =(e) => {
        props.setAuthorized("");
        setState({...state, register: {...state.register,[ e.target.name]: e.target.value}})
    }

    const handleRegistration = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/register", register, {withCredentials: true})
            .then(res => {console.log(res)
                navigate("/users")
            })
            .catch(err => console.log(err))
    }

    const handleLoginInputs = (e) => {
        props.setAuthorized("");
        setState({...state, login: {...state.login, [e.target.name]: e.target.value}})
    }

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/login", login, {withCredentials: true})
        .then(res => { console.log(res)
            navigate("/users")
        })
        .catch(err => console.log(err))
    }


    return(
        <div className='LoginContainer'>
            <h1 className='Unauthorized'>{props.authorized}</h1>

        {/* REGISTER */}
            {/* FORM */}
            <form onSubmit={handleRegistration}>
                <h2>Registration</h2>
            {/* Register First */}
                <div>
                    <label>First Name</label>
                    <input
                        onChange={handleRegInputs}
                        name="firstName"
                        type="text"
                        className="FormControl" 
                    />
                </div>
            {/* Register Last Name */}
                <div>
                    <label>Last Name</label>
                    <input
                        onChange={handleRegInputs}
                        name="lastName"
                        type="text"
                        className="FormControl" 
                    />
                </div>
            {/* Register Email */}
                <div>
                    <label>Email</label>
                    <input
                        onChange={handleRegInputs}
                        name="email"
                        type="text"
                        className="FormControl" 
                    />
                </div>
            {/* Register PW */}
                <div>
                    <label>Password</label>
                    <input
                        onChange={handleRegInputs}
                        name="password"
                        type="password"
                        className="FormControl" 
                    />
                </div>
            {/* Register Confirm PW */}
                <div>
                    <label>Confirm Password</label>
                    <input
                        onChange={handleRegInputs}
                        name="confirmPassword"
                        type="password"
                        className="FormControl" 
                    />
                </div>
            {/* Register Button */}
                <div>
                    <button className='RegisterButton'>Register</button>
                </div>
            </form>


        {/* LOGIN */}
            {/* FORM */}
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <div>
                    <label>Email</label>
                    <input
                        onChange={handleLoginInputs}
                        name="email"
                        type="text"
                        className="FormControl" 
                        />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        onChange={handleLoginInputs}
                        name="password"
                        type="password"
                        className="FormControl" 
                        />
                </div>
                <div>
                    <button className='LogInButton'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;