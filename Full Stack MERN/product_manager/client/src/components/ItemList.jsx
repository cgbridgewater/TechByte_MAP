import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ItemList = (props) => {
    const { removeFromDom, item, setItem } = props;
    
    const deleteItem = (itemId) => {
        axios.delete('http://localhost:8000/api/item/' + itemId)
            .then(res => {
                removeFromDom(itemId)
            })
            .catch(err => console.log(err))
    }




    useEffect(() => {
        axios.get("http://localhost:8000/api/item")
        .then((res) => {
            console.log(res.data);
            setItem(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [setItem])

    return (
        <div style={{backgroundColor:"silver", minHeight:"35vh"}}>
            {
                item.map((item, index) => {
                    return(
                        <div style={{padding:"5px", border:"2px solid black"}} key={index}>
                            <p style={{margin:0}} > {item.title} </p>
                            <p style={{margin:0}} > ${item.price} </p>
                            {/* <p style={{margin:0}} > {item.description} </p> */}
                            <Link style={{textDecoration:"none"}} to={`/item/${item._id}`}> View the {item.title}'s Info Page</Link>
                            <br />
                            <Link style={{textDecoration:"none"}} to={"/item/edit/" +item._id}> Edit  "{item.title}"</Link>
                            <br />
                            <button className='DeleteButton'
                            onClick={(e) =>{deleteItem(item._id)}}>
                            Delete Item</button>
                        </div>
                )})
            }
        </div>
    );
}
export default ItemList;