import { Link } from "react-router-dom"

const Construction = () => {

    return(
        <div style={{minHeight:"65vh", padding:"2%"}}>
            <Link className="Construction" to="/" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline"}}>HOME</Link><br />
            <img className="desktop-only" style={{margin:"2% auto",width:"60%", height:"auto"}} src="https://png.pngitem.com/pimgs/s/46-464912_site-under-construction-hd-png-download.png" alt="Under Construction" />
            <img className="mobile-only" style={{margin:"2% auto",width:"90%", height:"auto"}} src="https://png.pngitem.com/pimgs/s/46-464912_site-under-construction-hd-png-download.png" alt="Under Construction" />
        </div>
    ) 
}

export default Construction

