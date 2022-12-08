import React from 'react';
    
const Groceries = (props) => {
    // this could just as easily come from props
    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter", "bread"];
    return (
        <ul className='Rows'>
        {
            groceryList.map( (item, index) => 
                <ul className='Items' key={ index }>{ item }</ul>
            )
        }
        </ul>
    ); 
}
    
export default Groceries;