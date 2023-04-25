import { Movie } from "../../models/movie.model"
import MovieCard from "../MovieCard"
import './MovieList.scss'

type props = {
    movies: Movie | undefined
} 

const MovieList = ({movies} : props) => {
    return (
        <div className='movie-container'>
      {movies && movies.Search.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
    </div>
    )
}

export default MovieList