import { Link, useParams } from 'react-router-dom';


const HelloColors = (props) => {
    const { name } = useParams();
    const { hello } = useParams();
    const { red } = useParams();
    const { blue  } = useParams();
    return(
    <div>

        <div className='Result' style={{color: (red), background: (blue), padding:"50px" }}>
            { name } says,  "{ hello }"
        </div>
            {/* <h3>this is hello colors</h3>  */}
            {/* <h3>
                color 1 : { red }
            </h3>
            <h3>
            color 2 : { blue }
            </h3> */}
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <Link to={"/"}>Go To Index</Link>
        <Link to={"/home"}>Go To Home</Link>
        </div>
        {/* <br />
        <Link to={"/4"}>Go To 4</Link>
        <br />
        <Link to={"/hello"}>Go To Hello</Link>
        <br /> */}
    </div>
    )
}

export default HelloColors;