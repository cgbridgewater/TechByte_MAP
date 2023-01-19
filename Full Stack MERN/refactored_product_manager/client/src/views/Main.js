import React, { useState } from "react";
import ItemForm from "../components/ItemForm";
// import ItemList from "../components/ItemList";
import ItemList2 from "../components/itemList2";

const Main = () => {

    const [ item, setItem ] = useState([]);

    const removeFromDom = itemId => {
        setItem(item.filter(item => item._id !== itemId));
    }
    
    return(
        <div>
            <ItemForm item= {item} setItem={setItem}/>
            {/* <hr style={{width:"80%",height:"10px", margin:"0 auto", backgroundColor:"darkGrey", borderRadius:"10px"}} />
            <ItemList item= {item} setItem={setItem} removeFromDom={removeFromDom}/> */}
            <hr style={{width:"80%",height:"10px", margin:"25px auto", backgroundColor:"darkGrey", borderRadius:"10px",  boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)"}} />
            <ItemList2 item= {item} setItem={setItem} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main;