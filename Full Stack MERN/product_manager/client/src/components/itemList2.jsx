import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const sortType = { 
    // NONE:(a,b) => 0,
    NONE: (a,b) => a.createdAt > b.createdAt ? -1 : 1,
    HIGHTOLOW: (a,b) => a.price > b.price ? -1 : 1,
    LOWTOHIGH: (a,b) => a.price > b.price ? 1 : -1,
    ATOZ: (a,b) => a.title.localeCompare(b.title),                   
    ZTOA: (a,b) => b.title.localeCompare(a.title)
}




const ItemList2 = (props) => {
    const { removeFromDom, item, setItem } = props;
    const [ sort, setSort ] = useState("NONE") 


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
    }, [sort])


// axios call based on drop down select

    return (

        <div>
            <div style={{display:"flex", justifyContent:"flex-end", marginRight:"15%"}} >
                <label style={{fontSize:"18px", fontWeight:800, color:"goldenrod", marginRight:"10px"}} htmlFor="">Sort:</label>
                <select onChange={(e) => setSort(e.target.value)} style={{border:"3px solid goldenrod", fontSize:"18px", color:"goldenrod",backgroundColor:"#073DAA",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"}}>
                    <option value="NONE">Recently Added</option>
                    <option value="ATOZ">A to Z</option>
                    <option value="ZTOA">Z to A</option>
                    <option value="HIGHTOLOW">Highest Price</option>
                    <option value="LOWTOHIGH">Lowest Price</option>
                </select>
            </div>
            <br />
        <div className='Main' style={{marginLeft:"3vw", display:'flex',justifyContent:"center"}}>
            <div className='Boxes' 
            style={{display:"flex", flexWrap:"wrap"}}>
                {item.length > 0 && [...item]
                    .sort(sortType[sort])
                    .map((item, index) => {
                        return(
                        <div className='CardContainer'>
                            <div key={index} className="Card">
                                <h1 style={{color:"#073DAA"}}>{item.title}</h1>
                                <p className="price" style={{color:"#073DAA", fontSize:"22px", fontWeight:"600"}}>${item.price.toFixed(2)}</p>
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