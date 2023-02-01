import '../css/Login.css'
import { useState } from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom'

const LoginPage = props => {

    const [state, setState] = useState ({
        login: {
            email:"",
            password:""
        }
    });

    const {login} = state;
    const navigate = useNavigate()

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
        //LOGIN //
        <div className='LoginContainer'>
            {/* Unauthorized warning */}
            <h2 id='LoginH2' className='Unauthorized'>{props.authorized}</h2>

            {/* FORM */}
            <form onSubmit={handleLogin}>
                <br /><br /><h1 id='LoginH1'>Cookies Login</h1>

                {/* Email Input */}
                <div>
                    <label>Email</label>
                    <input
                        onChange={handleLoginInputs}
                        name="email"
                        type="text"
                        className="FormControl" 
                        />
                </div>

                {/* Password Input */}
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
            <div>
                <Link to='/register'>Not Registered?</Link>
            </div>
        </div>
    )
}

export default LoginPage;