import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemForm from "../components/ItemForm";
import ItemList2 from "../components/ItemList2"

const Main = () => {
    const [ isChanged, setIsChanged ] = useState(false)
    const [ item, setItem ] = useState([]);
    const [errors, setErrors] = useState({});
    // const [initialTitle, setInitialTitle] = useState("")
    // const [initialPrice, setInitialPrice] = useState("")
    // const [initialDescription, setInitialDescription] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/item')
            .then(res => {
                setItem(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const removeFromDom = itemId => {
        axios.delete('http://localhost:8000/api/item/' + itemId)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setItem(item.filter(item => item._id !== itemId));
            })
            .catch((err) => console.log(err));
    }

    const createItem = async itemParam => {
        let succeed = false
        try {
            const res = await axios.post('http://localhost:8000/api/item', itemParam)
                setItem([...item, res.data])
                setIsChanged(!isChanged)
                succeed = true
                setErrors({})
        } catch (err) {
            setErrors(err.response.data.errors);
        }
            // .then(res => {     // Good api call, nothing to see here, move along...
            //     console.log(res);
            //     console.log(res.data);
            //     // setInitialTitle("")
            //     // setInitialPrice("")
            //     // setInitialDescription("")
            // })
            // .catch((err) => { // Bad api call, do this!
            //     console.log(err) // Console log it for debugging
            //         //Set Errors   //REMOVE THIS LINE FOR GLOBAL DISPLAY
            //     }) // REMOVE THIS LINE FOR GLOBAL DISPLAY
                // USE THIS FOR DISPLAYING ERRORS AT TOP OF THE SCREEN  //YUK//
                // const errorResponse = err.response.data.errors; // Get errors from err.response.data
                // const errorArr = []; // Create a temp array to push the messages into
                //     for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                //         errorArr.push(errorResponse[key].message)
                //     }
            //     setErrors(errorArr); //Set Errors
            // })
            // USE THIS FOR DISPLAYING ERRORS AT TOP OF THE SCREEN  //YUK//
    return succeed
    }
    
    return(
        <div>
            <h1>Add New Product Into Database</h1>
            
            {/* USE THIS FOR DISPLAYING ERRORS AT TOP OF THE SCREEN  //YUK//  */}
            {/* {errors.map((err, index) => <p style={{color:"red",fontWeight:700}} key={index}>{err}</p>)}  */}  
            
            <ItemForm
                onSubmitProp={createItem} 
                initialTitle=''
                initialPrice='' 
                initialDescription=''
                // initialTitle={initialTitle}
                // initialPrice={initialPrice} 
                // initialDescription={initialDescription}
                errors= {errors} 
                />

            <hr style={{width:"80%",height:"10px", margin:"25px auto", backgroundColor:"darkGrey", borderRadius:"10px",  boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)"}} />

            <ItemList2
                isChanged= { isChanged }
                item= { item }
                removeFromDom= { removeFromDom }
                />
        </div>
    )
}

export default Main;