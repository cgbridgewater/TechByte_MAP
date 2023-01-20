import {Link} from "react-router-dom"


const BadLink = () => {


    return(
        <div>
            <h3 style={{color:"goldenrod", fontWeight:700, fontSize:"30px", marginTop:"20"}}>Please, "Be Kind and Rewind" yourself back to the homepage!</h3>
            <Link to="/home" className='ViewButton' style={{  textDecoration: "none"}}><button style={{backgroundColor:"goldenrod",border:"none",color:"blue", fontWeight:"800"}}> Home Page </button></Link>
            <br/>
            <br/>
            <br/>
            <img style={{height:"600px"}} src="https://farm66.staticflickr.com/65535/52638363868_b1a3eac40b_b.jpg" alt="bekindRewind" />
        </div>
    )

}

export default BadLink