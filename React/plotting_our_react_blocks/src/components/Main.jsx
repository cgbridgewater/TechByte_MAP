import React from 'react';
import Advertisement from './Advertisement';
import SubContents from './SubContents';

const Main = (props) => {

    return(
        <div className='Main'>
            {/* {props.children} */}
            <div className='Row'>
            <SubContents/>
            <SubContents/>
            <SubContents/>
            </div>
            <Advertisement/>
        {/* <h1 className='Dojo'> Main!</h1>     */}
    </div>
    )
}

export default Main