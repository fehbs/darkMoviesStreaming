import { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { FaInfo } from 'react-icons/fa';
import './home.css';

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function loadMovies() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "8405eab5f0c7e145a5f2edd60bb556c5",
                    language: "en",
                    page: 1,
                }
            })
            setMovies(response.data.results)
            setLoading(false)
        }
        loadMovies();
    }, [])
    if (loading) {
        return (
            <div>
                <h2>Loading movies...</h2>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="sub-titleContainer">
                <h1 className="sub-title">
                    <img className="subLogo" src="dark.png" />
                    Movies</h1>
            </div>
            <div className="movies-list">
                {movies.map((movie) => {
                    return (
                        <article key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <Link to={`/movie/${movie.id}`}><FaInfo size={18} />Access movie</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}
export default Home;