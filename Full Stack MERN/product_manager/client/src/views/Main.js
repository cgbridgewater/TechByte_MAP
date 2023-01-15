import React, { useState } from "react";
import ItemForm from "../components/ItemForm";
import ItemList from "../components/ItemList";

const Main = (props) => {

    const [ item, setItem ] = useState([]);

    return(
        <div>
            <ItemForm item= {item} setItem={setItem}/>
            <hr style={{height:"10px", margin: 0, backgroundColor:"darkGrey"}} />
            <ItemList item= {item} setItem={setItem}/>
            </div>
    )
}

export default Main;