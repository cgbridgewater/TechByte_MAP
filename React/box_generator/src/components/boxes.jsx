import React, { useState } from 'react';
    
const BuildaBox = (props) => {
    const [newBox, setNewBox] = useState("");
    // const [newColor, setNewColor] = useState("");
    // const [newSize, setNewSize] = useState ("");
    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const myBoxes = []
    
    
const createNewBox = (e) => {
    e.preventDefault();
    myBoxes(current => [...current,"setNewBox"])
}


    // const createNewBox = (e) => {
    //     e.preventDefault();
    //     // props.setCurrent(newBox)
    //     const makeNewBox = newBox;
    //     myBoxes.push(newBox);
    //     console.log('AAAA',makeNewBox);
    //     console.log('BBBBB', "cccc",myBoxes)
    //     // setNewBox("");
    //     // setHasBeenSubmitted( true );
    // };
    


    return (
        <div>
            <form onSubmit={ createNewBox }>
                <h1>Color</h1>
                <textarea 
                    rows="1"
                    cols="20"
                    placeholder="Pick a color"
                    value={ newBox }
                    onChange={ (e) => setNewBox(e.target.value) }
                ></textarea>
                <input type="submit" value="Make A Box" />
            </form>

        
        <p>{newBox}</p>
        <p>{myBoxes}</p>
        <ul>
        {
            myBoxes.map( (item, index) => 
                <li key={ index }>{ item }</li>
            )
        }
        </ul>

        </div>
    );
};


    
export default BuildaBox;
