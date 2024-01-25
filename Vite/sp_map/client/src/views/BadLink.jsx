import { Link } from "react-router-dom"
import Yikes from "../assets/Yikes.jpg"

const BadLink = () => {

    return(
        <div className="YikesContainer">
            {/* <h2 className="YikesTitle">It appears your lost...</h2> */}
            <img className='Yikes' src={Yikes} alt="404" />
            <Link className="YikesButton"  to="/">Get me outta here!!</Link>
        </div>
    )
}

export default BadLink