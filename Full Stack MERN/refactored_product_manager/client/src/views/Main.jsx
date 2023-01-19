import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemForm from "../components/ItemForm";
import ItemList2 from "../components/ItemList2"

const Main = () => {
    const [ isChanged, setIsChanged ] = useState(false)
    const [ item, setItem ] = useState([]);

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

    const createItem = itemParam => {
        axios.post('http://localhost:8000/api/item', itemParam)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setItem([...item, res.data])
                setIsChanged(!isChanged)
            })
            .catch((err) => console.log(err))
    }
    
    return(
        <div>
            <h1>Add New Product Into Database</h1>
            <ItemForm
                onSubmitProp={createItem} 
                initialTitle="" 
                initialPrice="" 
                initialDescription="" 
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