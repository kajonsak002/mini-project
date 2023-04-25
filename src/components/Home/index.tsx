import { useState, useEffect } from "react";
import MovieApi from "../../api/MovieApi";
import { APIkey } from "../../api/MovieApiKey";
import "./Home.scss";
import MovieList from "../MovieList";
import { Movie } from "../../models/movie.model";

type Props = {};

const Home = ({}: Props) => {
  const [movie, setMovie] = useState<Movie>('');
  const [search, setSearch] = useState<string>("");

  const fetchMovie = async () => {
    try {
      const searchKey = search ? search : "spider";
      const { data: movies } = await MovieApi.get(
        `?apikey=${APIkey}&s=${searchKey}&type=movie`
      );
      setMovie(movies);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchMovie();
  }, [search]);

  return (
    <>
      <div>
        <h3 style={{ margin: "1rem 0" }}>Movie</h3>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <MovieList movies={movie} />
      </div>
    </>
  );
};

export default Home;
