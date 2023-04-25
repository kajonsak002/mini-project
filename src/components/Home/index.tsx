import { useState, useEffect } from "react";
import MovieApi from "../../api/MovieApi";
import { APIkey } from "../../api/MovieApiKey";
import "./Home.scss";
import MovieList from "../MovieList";
import { useAppDispatch } from "../../store/store";
import { addMovie } from "../../store/slices/movieSlice";

type Props = {};

const Home = ({}: Props) => {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState<string>("");

  const fetchMovie = async () => {
    try {
      const searchKey = search ? search : "batman";
      const { data: movies } = await MovieApi.get(
        `?apikey=${APIkey}&s=${searchKey}&type=movie`
      );
      
      setTimeout(() => {
        dispatch(addMovie(movies.search))
      }, 500);
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
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <MovieList/>
      </div>
    </>
  );
};

export default Home;
