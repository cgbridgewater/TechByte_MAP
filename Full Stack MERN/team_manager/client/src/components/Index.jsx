import React from 'react';
import { Link } from 'react-router-dom';

const Indexpage = () => {
    return(
        <div className='Index'>
            <h1>Welcome To 'Team Manager'</h1>
            {/* <h4>Click below view the roster</h4> */}
            <Link to={`/home`}><button className='EnterBall'></button></Link>
        </div>
    )
}

export default Indexpage