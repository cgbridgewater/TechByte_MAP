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
        <div style={{width:'700px'}} className='ListContainer'>

            <table>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    {/* <th>Description</th> */}
                    <th>Actions</th>
                    
                </tr>
{/* start mapping */}
            {
                item.map((item, index) => {
                    return( 


                <tr key={index}>
                    <td style={{ textAlign:"start",color:"darkRed", fontSize:"30px",fontWeight:700}}>{item.title}</td>
                    <td style={{fontWeight:700, fontSize:"20px"}}>${item.price}</td>
                    {/* <td>{item.description}</td> */}
                    <td>
                        <button className='ViewButton'><Link style={{textDecoration:"none", color:"white"}} to={`/item/${item._id}`}> View Info</Link></button>
                        <button className='EditButton'><Link style={{textDecoration:"none", color:"white"}} to={"/item/edit/" +item._id}> Edit</Link></button>
                        <button className='DeleteButton'
                        onClick={(e) =>{deleteItem(item._id)}}>
                        Delete Item</button>
                    </td>
                    <td></td>
                </tr>
                )})
            }
{/* end mapping */}
            </table>
        </div>
    );
}
export default ItemList;