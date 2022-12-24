import { Link } from 'react-router-dom';


const Home = (props) => {
    return(

    <div>
        <div className='Home'>
            <h1 style={{color: "brown" }}>
                Welcome!!   
            </h1>
            <h3>You've Reached The Home Page</h3>
            <h5>click below to go to the index page</h5>
        </div>
        <hr />
        <Link to={"/"}>Go To Index</Link>
    </div>
    )
}

export default Home;