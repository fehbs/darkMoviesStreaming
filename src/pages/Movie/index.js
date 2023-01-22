import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { FaPlay } from 'react-icons/fa';
import { RiAddCircleLine } from 'react-icons/ri';
import { ImUserCheck } from 'react-icons/im';
import './style.css'
import api from '../../services/api';

function Movie() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovies() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "8405eab5f0c7e145a5f2edd60bb556c5",
                    language: "en",
                }
            })
                .then((res) => {
                    setMovie(res.data);
                    setLoading(false);
                    console.log(res)
                })
                .catch(() => {
                    console.log('Not Found!')
                    navigate("/", { replace: true });
                    return;
                })
        }
        loadMovies();
        return () => {
            console.log('Off Conponent')
        }
    }, [navigate, id])
    function saveMovie() {
        const myList = localStorage.getItem("@moviesApp");
        let moviesSaved = JSON.parse(myList) || [];
        const hasMovie = moviesSaved.some((movieSaved) => movieSaved.id === movie.id)
        if (hasMovie) {
            toast.warn("This movie is already on your list!")
            return;
        }
        moviesSaved.push(movie);
        localStorage.setItem("@moviesApp", JSON.stringify(moviesSaved));
        toast.success('Added movie!');
    }
    if (loading) {
        return (
            <div className="movie-detail">
                <h1>Loading details...</h1>
            </div>
        )
    }
    return (
        <div className="movie-detail">
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <h4><ImUserCheck size={22} /> {movie.vote_average
                / 10} assessents</h4>
            <div className="btnsDiv">
                <button onClick={saveMovie}><RiAddCircleLine size={20} />Add to Favorites</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>
                        <FaPlay size={16} /> Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}
export default Movie;

