import { Link,useParams } from 'react-router-dom';

    const SurveyResults = (props) => {
        const {name} = useParams();
        const {comment} = useParams();
    }
    


const Home = (props) => {
    return(
    <div>
        <h1 style={{color: "red" }}>
            Home Component Page
        </h1>
        <Link to={"/about"}>Go To About</Link>
        <br />
        <Link to={"/results"}>Go To Results</Link>

        {/* <h3>{ name } says " {comment} " !</h3> */}


    </div>
    )
}

export default Home;