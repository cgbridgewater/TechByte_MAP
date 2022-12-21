import axios from "axios";
import { useEffect, useState } from "react";

const AxiosAPI = (props) => {

    const [movie, setMovie] = useState(false);
    const [title, setTitle] = useState("");
    const [movieList, setMovieList] = useState([]);
    
    
    useEffect(() => {
        if (!movie) {
            axios
                .get("http://www.omdbapi.com/?apikey=92fa6f49&t=" + title)
                .then((res) => setMovie(res.data))
                .catch((err) => console.log(err));
        } // This will make sure the api call will only happen once
        setMovieList([...movieList, movie]); // We want to update our list each time movie changes
    }, [movie]);

    const getData = (e) => {
        e.preventDefault();
        axios
            .get("http://www.omdbapi.com/?apikey=92fa6f49&t=" + title)
            .then((res) => setMovie(res.data))
            .catch((err) => console.log(err));
    };

    return (
        <div className="Axios">
            <h5>Type a movie!</h5>
            <form onSubmit={getData}>
                <input onChange={(e) => setTitle(e.target.value)} type="text" />
            </form>
            <button className="MovieButton">Fetch!</button>
            {movieList.length > 0 && movieList.map((m, i) => <div className="Movie">{m.Title}</div>)}
        </div>

    );
}





export default AxiosAPI


