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


// axios call based on drop down select

    return (

        <div>

            <div style={{display:"flex", justifyContent:"flex-end", marginRight:"15%"}} >
                <label style={{fontSize:"18px", fontWeight:700, color:"white", marginRight:"10px"}} htmlFor="">Sort:</label>
                <select style={{border:"3px solid darkblue", fontSize:"18px",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"   }}>
                    <option value="">Recently Added</option>
                    <option value="">A to Z</option>
                    <option value="">Z to A</option>
                    <option value="">Highest Price</option>
                    <option value="">Lowest Price</option>
                </select>
            </div>
            <br />
        <div className='Main' style={{marginLeft:"3vw", display:'flex',justifyContent:"center"}}>
            <div className='Boxes' 
            style={{display:"flex", flexWrap:"wrap"}}>
                {
                    item.map((item, index) => {
                        return(
                        <div className='CardContainer'>
                            <div key={index} className="Card" 
                            // style={{boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)",backgroundColor:"darkgray", width:"100%",textAlign:"center",border:"2px solid darkblue", borderRadius:"10px"}}
                            >
                                <h1>{item.title}</h1>
                                <p className="price" style={{color:"grey", fontSize:"22px"}}>${item.price}</p>
                                <p>
                                    <Link style={{textDecoration:"none", color:"white"}} to={`/item/${item._id}`}><button className='ViewButton'>View Item</button></Link>
                                </p>
                                <p>
                                    <Link style={{textDecoration:"none", color:"white"}} to={"/item/edit/" +item._id}><button className='EditButton'>Edit</button></Link>
                                    </p>
                                <p> 
                                    <button className='DeleteButton'
                                    onClick={(e) =>{deleteItem(item._id)}}>
                                    Delete Item</button>   
                                </p>
                            </div>
                        </div>
                    )})
                }
            </div>
        </div>
        </div>
    );
}
export default ItemList2;