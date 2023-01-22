import './favorites.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';

function Favorites() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const myList = localStorage.getItem("@moviesApp");
        setMovies(JSON.parse(myList) || []);
    }, [])
    function movieDelete(id) {
        let moviesFilter = movies.filter((movie) => {
            return (movie.id !== id)
        })
        setMovies(moviesFilter)
        localStorage.setItem("@moviesApp", JSON.stringify(moviesFilter))
        toast.success('Removed movie.')
    }
    return (
        <div className='favorites-movies'>
            <h1>My favorite movies <MdFavorite size={55} color="#B31D1D" /> !</h1>
            {movies.length === 0 && <small>You don't have any movies in your list.</small>}
            {movies.length === 0 && <img src="https://darkside.blog.br/wp-content/uploads/2020/06/neon_darkside_central.gif" alt="DarkSide" />}
            <ul className="favoritesUl">
                {movies.map((movie) => {
                    return (
                        <li key={movie.id} className="favoritesLi">
                            <span className="favoritesSpan">{movie.title}</span>
                            <Link className="favoriteA" to={`/movie/${movie.id}`}><BsInfoCircle size={22} />See the details of this movie...</Link>
                            <button onClick={() => movieDelete(movie.id)}><FaRegTrashAlt className="favoriteA" size={30} /></button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Favorites;