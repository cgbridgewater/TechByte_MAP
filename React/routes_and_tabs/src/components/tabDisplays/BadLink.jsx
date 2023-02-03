import {Link} from "react-router-dom"

const BadLink = () => {

    return(
        <div className="Container" style={{padding:"2%", minHeight:"92.5vh"}}>
            <h3 className="desktop-only"  style={{color:"yellow", fontWeight:700, fontSize:"30px", marginTop:"20"}}>This link appears to be broken.</h3>
            <h3 className="desktop-only"  style={{color:"yellow", fontWeight:700, fontSize:"30px", marginTop:"20"}}>We're just as shocked as you are... </h3>
            <h3 className="mobile-only"  style={{color:"yellow", fontWeight:700, fontSize:"20px", marginTop:"20"}}>This link appears to be broken.</h3>
            <h3 className="mobile-only"  style={{color:"yellow", fontWeight:700, fontSize:"20px", marginTop:"20"}}>We're just as shocked as you are... </h3>
            <Link to="/" className='Construction' style={{  textDecoration: "none"}}>HOME</Link>
            <br/>
            <br/>
            <img  className="desktop-only" style={{width:"60%",height:"auto", borderRadius:"20%"}} src="https://assets.vg247.com/current//2017/07/pokemon-ash-shocked.jpg" alt="" />        
            <img  className="mobile-only" style={{width:"100%",height:"auto", borderRadius:"20%"}} src="https://assets.vg247.com/current//2017/07/pokemon-ash-shocked.jpg" alt="" />        
        </div>
    )
}

export default BadLink