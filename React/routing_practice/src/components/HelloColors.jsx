import { Link, useParams } from 'react-router-dom';


const HelloColors = (props) => {
    
    const { name } = useParams();
    const { hello } = useParams();
    const { red } = useParams();
    const { blue  } = useParams();
    return(



    <div>
        <div className='Result' style={{color: (red), background: (blue), padding:"50px", fontSize:"40px" ,fontWeight: "700"}}>
            { name } says,  "{ hello }"
        </div>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <Link to={"/"}>Go To Index</Link>
        <Link to={"/home"}>Go To Home</Link>
        </div>
    </div>
    )
}

export default HelloColors;