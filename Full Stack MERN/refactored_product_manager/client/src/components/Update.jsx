import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ItemForm from "./ItemForm"
import DeleteButton from "./DeleteButton"


const Update = (props) => {
    const {id} = useParams();
    const [ item, setItem ] = useState({});
    const [ loaded, setLoaded ] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/item/" + id)
        .then( res => {
            console.log(res.data);
            setItem(res.data);
            setLoaded(true)
        })
        .catch( err => console.log(err) );
    }, []);

    const updateItem = itemParam => {
        axios.put('http://localhost:8000/api/item/' + id, itemParam) 
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }


    return(
        <div style={{backgroundColor:"darkslateblue", minHeight:"70vh"}}>
            <h1>Update an Item</h1>
            {
                loaded && (
                <>
                    <ItemForm
                        onSubmitProp={updateItem}
                        initialTitle={item.title}
                        initialPrice={item.price}
                        initialDescription={item.description}
                    />
                
                </>
                )}
                


            <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"20px", marginBottom:"20px"}}>
                <DeleteButton
                    itemId= {id}
                    successCallback= {() => navigate("/home")}
                />
                <Link to="/home" style={{  textDecoration: "none", color: "whitesmoke"}}><button className='ViewButton'> Home Page </button></Link>
            </div>

        </div>
    )
}

export default Update;