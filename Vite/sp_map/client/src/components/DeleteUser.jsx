import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const DeleteUser = () => {

    const [ userToken, setUserToken ] = useState("");

    const navigate = useNavigate()
    useEffect(() => {
        axios.delete("http://localhost:8000/api/user/delete", {
            withCredentials:true,
            headers: {
                Authorization: `Bearer ${userToken}`,  // Include the user token in the Authorization header
            },
        })
            .then(() => {
                console.log("User Deleted!")
                navigate("/")
            })
            .catch((err) => {
                console.log("Unable To Delete User");
                navigate("/profile")
            });
    }, [])
}

export default DeleteUser;