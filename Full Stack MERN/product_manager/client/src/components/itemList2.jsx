import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ItemList2 = (props) => {
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
    }, [])



    return (

        
        
        <div className='Boxes' 
         style={{width:"98%",display:"flex", flexWrap:"wrap"}}>
            {
                item.map((item, index) => {
                    return(
                        <div key={index} className="card" style={{boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.2)",backgroundColor:"darkgray", width:"20%", margin:"10px auto",textAlign:"center",border:"2px solid darkblue", borderRadius:"10px"}}>
                            <h1>{item.title}</h1>
                            <p className="price" style={{color:"grey", fontSize:"22px"}}>${item.price}</p>
                            <p><Link style={{textDecoration:"none", color:"white"}} to={`/item/${item._id}`}><button style={{boder:"none",outline:0, padding:"12px", color:"white", backgroundColor:"#000", textAlign:"center", cursor:"pointer",width:"100%",fontSize:"18px"}}> View Info</button></Link></p>
                            <p><Link style={{textDecoration:"none", color:"white"}} to={"/item/edit/" +item._id}><button style={{boder:"none",outline:0, padding:"12px", color:"white", backgroundColor:"#000", textAlign:"center", cursor:"pointer",width:"100%",fontSize:"18px"}}> Edit</button></Link></p>
                            <p> 
                                <button className='DeleteButton'
                                onClick={(e) =>{deleteItem(item._id)}}>
                                Delete Item</button>   
                            </p>
                    </div>
                )})
            }
        </div>
    );
}
export default ItemList2;