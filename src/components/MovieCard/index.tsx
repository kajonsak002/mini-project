import React from "react";
import { SearchMovieData } from "../../models/movie.model";
import "./MovieCard.scss";

type Props = {
  movie: SearchMovieData;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="card-content">
        <span className="card-title">{movie.Title}</span>
        <p> Year : {movie.Year} </p>
      </div>
      <div className="card-action">
        <button onClick={() => console.log("on click")}>Read More</button>
      </div>
    </div>
  );
};

export default MovieCard;
