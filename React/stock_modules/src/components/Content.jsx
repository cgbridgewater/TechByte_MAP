

const Content = () => {
    return (
        <div>
            <form style={{width:"400px", margin:"4% auto",padding:"1%", border:"8px solid darkGrey", borderRadius:"5%", backgroundColor:"darkblue", color:"whitesmoke"}} className="BasicForm" action="">
                <label htmlFor="">Input 1</label>
                <br />
                <input type="text" />
                <br />
                <label htmlFor="">Input 2</label>
                <br />
                <input type="text" />
                <br />
                <label htmlFor="">Input 3</label>
                <br />
                <input type="text"/>
                <br />
                <button style={{width:"25%",margin:"2% auto", padding:"1%", border:"4px solid darkGrey", borderRadius:"8%"}} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

    export default Content;