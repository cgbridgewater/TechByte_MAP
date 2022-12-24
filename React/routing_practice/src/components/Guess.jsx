import React from 'react';
import { Link, useParams } from 'react-router-dom';


const Guess = (props) => {
    const { number } = useParams();
    return(
    <div>
            
        <div className='Guess'>
        <h1>Let me guess if you submitted a word or a number... </h1>

            <div>
            {
                //This method returns a boolean based on whether the argument is a number
                isNaN(number)?  //If number param isn't a number:
                    
                <div>
                    <p 
                    //if you want to style as well, use color1 and color2 as parameters to style
                    // style={
                        //     //If color param exists, then style this element with the values passed in
                        //     color? 
                        //     {color: color1, backgroundColor: color2}
                        //     :null
                        // }
                        >You submitted a word!</p>
                        <h3>{number}</h3>
                </div>
                : //If the number param IS a number:
                <div>
                    <p>You submitted a number!</p>
                    <h3> {number}</h3>
                </div>
            }
            </div>
            </div>
        <hr />
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <Link to={"/"}>Go To Index</Link>
            <br />
            <Link to={"/home"}>Go To Home</Link>
        </div>
    </div>
    )
}

export default Guess;