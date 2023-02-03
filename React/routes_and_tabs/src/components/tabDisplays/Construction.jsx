import { Link } from "react-router-dom"

const Construction = () => {

    return(
        <div style={{minHeight:"65vh", padding:"2%"}}>
            <Link className="Construction" to="/" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline"}}>HOME</Link><br />
            <img style={{margin:"2% auto", height:"457px"}} src="https://png.pngitem.com/pimgs/s/46-464912_site-under-construction-hd-png-download.png" alt="Under Construction" />
        </div>
    ) 
}

export default Construction

