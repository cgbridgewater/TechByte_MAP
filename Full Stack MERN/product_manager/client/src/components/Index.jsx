import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Indexpage = () => {
    return(
        <div className='Index'>
            <h1>Welcome To The Product Manager App</h1>
            <h4>Click below to enter products into the database</h4>
            <button className='EnterButton' >
            <Link style={{textDecoration:"none"}} to={`/home`}> Product Input Page</Link>
            </button>
            <br />
            <br />
            <br />
            <img className='Mongo' src="https://www.openlogic.com/sites/default/files/image/2021-06/image-blog-openlogic-what-is-mongodb.png" alt="mongodb" />
        </div>
    )
}

export default Indexpage