import React from 'react';
import { Link } from 'react-router-dom';

const Indexpage = () => {
    return(
        <div className='Index'>
            <h2 style={{fontSize:"40px", fontWeight:"800", color:"darkblue"}}>Welcome To The Product Manager App</h2>
            <h4 style={{color:"darkblue"}}>Click below to enter products into the database</h4>
            <Link  style={{textDecoration:"none"}} to={`/home`}><button className='EnterButton' > Product Input Page</button></Link>
            <br />
            <br />
            <br />
            <img className='Mongo' src="https://www.openlogic.com/sites/default/files/image/2021-06/image-blog-openlogic-what-is-mongodb.png" alt="mongodb" />
        </div>
    )
}

export default Indexpage