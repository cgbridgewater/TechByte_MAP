import React from 'react';
import { Link } from 'react-router-dom';

const Indexpage = () => {
    return(
        <div className='Index'>
            <h1>Welcome To The People Database App</h1>
            <h4>Click below to enter people into the database</h4>
            <Link  style={{textDecoration:"none"}} to={`/home`}><button className='EnterButton' > People Input Page</button></Link>
        </div>
    )
}

export default Indexpage