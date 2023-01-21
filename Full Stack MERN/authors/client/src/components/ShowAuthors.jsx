import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const sortType = { 
    NONE: (a,b) => a.createdAt > b.createdAt ? -1 : 1,
    // HIGHTOLOW: (a,b) => a.price > b.price ? -1 : 1,
    // LOWTOHIGH: (a,b) => a.price > b.price ? 1 : -1,
    ATOZ: (a,b) => a.author.localeCompare(b.author),                   
    ZTOA: (a,b) => b.author.localeCompare(a.author)
}




const ShowAuthors = (props) => {
    // const { removeFromDom, author, setAuthor } = props;
    const [ author, setAuthor ] = useState([]);
    const [ sort, setSort ] = useState("NONE") 
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !== authorId));
    }
    
    const deleteAuthor = (id) => {
        axios.delete('http://localhost:8000/api/author/' + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
        .then((res) => {
            console.log(res.data);
            setAuthor(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [setAuthor])



    return (
        <div style={{margin:" 0 auto",width:'700px', border:"10px double darkred", padding:"2% 5%", width:"30%", backgroundColor:'lightslategray'}} className='ListContainer'>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Link to="/new" className='NewButton' style={{ width:"35%"}}>Add an Author</Link>
                {/* sorting dropdown */}
                <div style={{margin:"0 auto"}}>
                    <label style={{fontSize:"18px", fontWeight:800, color:"darkred"}} htmlFor="">Sort:</label>
                    <select onChange={(e) => setSort(e.target.value)} style={{border:"3px solid black", fontSize:"18px", color:"white",backgroundColor:"darkred",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"}}>
                        <option value="NONE">Recently Added</option>
                        <option value="ATOZ">A to Z</option>
                        <option value="ZTOA">Z to A</option>
                    </select>
                </div>
            </div>
            
            
            {/* display table */}
            <table style={{margin:"30px auto"}}>
                <thead>
                    <tr style={{width:"120%",marginLeft:"100px",display:"flex", justifyContent:"space-between"}}>
                        <td style={{color:"white", textDecoration:"underline"}}>Author</td>
                        <td style={{color:"white", textDecoration:"underline"}}>Actions</td>
                    </tr>
                </thead>
            {/* start mapping */}
            {author.length > 0 && [...author]
                .sort(sortType[sort])
                .map((author, index) => {
                return( 
                    <tbody key={index}>
                        <tr >
                            <td style={{textAlign:"start",color:"darkRed", fontSize:"30px",fontWeight:700}}>{author.author}</td>
                            <td style={{borderLeft:"6px solid darkred"}}>
                                <Link style={{textDecoration:"none"}} to={"/edit/" +author._id}><button style={{fontWeight:"800",backgroundColor:"darkgray", color:"white", padding:"4px 8px", marginLeft:"40px" }} className='EditButton'> Edit</button></Link>
                                <button 
                                className='DeleteButton'
                                style={{fontWeight:"800",backgroundColor:"darkred",color:"white", padding:"4px 8px", marginLeft:"20px" }} 
                                onClick={(e) =>{deleteAuthor(author._id)}}>
                                Delete</button>
                            </td>
                        </tr>
                    </tbody>
                )})}
            {/* end mapping */}
            </table>
        </div>
    );
}
export default ShowAuthors;