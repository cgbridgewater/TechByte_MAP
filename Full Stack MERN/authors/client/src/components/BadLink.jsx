import {Link} from "react-router-dom"


const BadLink = () => {

    return(
        <div style={{backgroundColor:"#f3f3f3"}}> 
            {/* Page Title */}
            <h3 style={{color:"#5ebddb", fontWeight:700, fontSize:"30px",margin:"0", paddingTop:"20px"}}>Well this is embarrassing. This page doesn't seem to be here</h3>
            {/* Go home Link */}
            <Link to="/" className='ViewButton' style={{  textDecoration: "none"}}><button style={{backgroundColor:"#5ebddb",border:"2px solid black",color:"black",padding:"4px", fontWeight:"800"}}> Home Page </button></Link>
            <br/>
            {/* Robot Image */}
            <img style={{height:"600px"}} src="https://live.staticflickr.com/65535/52639609875_8dda044ff6_w.jpg" alt="bekindRewind" />
            <br/>
        </div>
    )
}

export default BadLink