import React, { useState } from "react";
import ItemForm from "../components/ItemForm";
import ItemList from "../components/ItemList";

const Main = () => {

    const [ item, setItem ] = useState([]);

    const removeFromDom = itemId => {
        setItem(item.filter(item => item._id != itemId));
    }

    return(
        <div>
            <ItemForm item= {item} setItem={setItem}/>
            <hr style={{width:"80%",height:"10px", margin:"0 auto", backgroundColor:"darkGrey", borderRadius:"10px"}} />
            <ItemList item= {item} setItem={setItem} removeFromDom={removeFromDom}/>
            </div>
    )
}

export default Main;