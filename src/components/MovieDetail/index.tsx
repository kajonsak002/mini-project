import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieApi from "../../api/MovieApi";
import { APIkey } from "../../api/MovieApiKey";
import { MovieDetailData } from "../../models/movie.model";
import "./MovieDetail.scss";

type Props = {};

const MovieDatail = () => {
  const [movie, setMovie] = useState<MovieDetailData | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  const fetchDetail = async () => {
    try {
      const { data } = await MovieApi.get(
        `?apikey=${APIkey}&i=${id}&plot=full`
      );
      setMovie(data);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="movie-detaill-con">
          <div className="movie-detail-image">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="movie-detail-info">
            <h3>{movie?.Title}</h3>
            <p style={{ margin: "2rem 0" }}>{movie?.Plot}</p>
            <div>
              <strong>Release : {movie?.Released} </strong>
            </div>
          </div>
        </div>
      ) : (
        <h4 style={{ margin: "1rem 0" }}>loading...</h4>
      )}
    </div>
  );
};

export default MovieDatail;
