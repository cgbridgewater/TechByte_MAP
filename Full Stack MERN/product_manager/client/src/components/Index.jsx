import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Indexpage = () => {
    return(
        <div className='Index'>
            <h1 style={{color:"goldenrod"}}>Welcome To The Product Manager App</h1>
            <h4 style={{color:"goldenrod"}}>Click below to "Make It A Movie Night"</h4>
            <Link  style={{textDecoration:"none"}} to={`/home`}><button className='EnterButton' > Product Input Page</button></Link>
            <br />
            <br />
            <br />
            <div style={{height:"40%"}}>
                <img className='Ticket' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Blockbuster_logo.svg/594px-Blockbuster_logo.svg.png?20160911233527" alt="blockbusterTicket" />
            </div>
        </div>
    )
}

export default Indexpage