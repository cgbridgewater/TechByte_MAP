import React from "react";

const Display = (props) => {
    // using the getter that is passed from my parent (App.js) component
    const { wordArray } = props;

    // dipslay the values held in state -
        // the wordArray will update when the form is submitted
            // when state is updated, it will cause this component to re-render this content


return (
    <div>
        <h1 style={{marginTop:"20%"}}>Here We Can Display The Submitted Words</h1>
        {
            wordArray.map((myWords, index) => (
                <div key={index} style={{
                    display:"inline-block",
                    margin: "10px",
                    height: myWords.size,
                    width: myWords.size,
                    padding:"5px",
                    backgroundColor: myWords.size
                }}>
                    {myWords}
                </div>
            ))
        }
    </div>
    );
}

export default Display;