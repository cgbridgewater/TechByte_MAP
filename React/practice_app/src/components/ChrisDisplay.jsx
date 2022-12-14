import React from "react";

const ChrisDisplay = (props) => {
    const { wordArray } = props;


return (
    <div>
        <h1 style={{marginTop:"5%"}}>Here We Can Display The Submitted Words</h1>
        {
            wordArray.map((myWords, index) => (
                <div key={index} style={{
                    display:"inline-block",
                    margin: "10px",
                    height: "auto" ,
                    width: "auto" , 
                    padding:"5px",
                    backgroundColor: myWords.color,
                    border: "2px solid black", 
                    borderColor: myWords.border
                    
                }}>
                {myWords.myWords}
                </div>
            ))
        }
    </div>
    );
}

export default ChrisDisplay;