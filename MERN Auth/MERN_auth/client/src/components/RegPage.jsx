import '../css/Reg.css'
import { useState } from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom'

const Register = props => {

    const [state, setState] = useState ({
        register: {
            firstName: "",
            lastName: "",
            email:"",
            password:"",
            confirmPassword:""
        }
    });

    const {register} = state;
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

    return(
        <div className='RegContainer'>
            <h2 id='RegH2' className='Unauthorized'>{props.authorized}</h2>

        {/* REGISTER */}
            {/* FORM */}
            <form onSubmit={handleRegistration}>
                <h1 id='RegH1'>Registration</h1>
            
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
            <Link to="/">Already Registered?</Link>
        </div>
    )
}

export default Register;