import { Link } from "react-router-dom"

const Construction = () => {

return(
    <div style={{minHeight:"65vh"}}>
        <Link to="/home" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline"}}>Return To Product Manager</Link><br />
        <div className="Wrap" style={{height:"50vh"}}>
            <img style={{margin:"2% auto", height:"50%"}} src="https://png.pngitem.com/pimgs/s/46-464912_site-under-construction-hd-png-download.png" alt="Under Construction" />
        </div>
    </div>
) 

}

export default Construction

