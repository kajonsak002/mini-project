import { createSlice , current } from "@reduxjs/toolkit"
import { SearchMovieData } from "../../models/movie.model"

type SearchMovieType = {
    movies: SearchMovieData[]
}

const initialState: SearchMovieType = {
    movies: []
}

const movieSlices = createSlice({
    name: 'movie-listing' ,
    initialState,
    reducers: {
        addMovie: (state , action) => {
            state.movies = action.payload

            console.log(current(state));
            
        }
    }
})

export const { addMovie } = movieSlices.actions
export default movieSlices.reducer