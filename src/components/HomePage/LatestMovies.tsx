import React from "react";
import { useLatestMoviesQuery } from "../../services/MoviesApiSlice/ApiSlice";
import Card from "../Card/Card";
import MovieCard from "../MovieCard/MoviesCard";

const LatestMovies = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadMovies());
  // }, [dispatch]);

  const { data, isLoading } = useLatestMoviesQuery();
  const Latest = data?.results;
  return (
    <div className="main-section">
      <div className="heading">
        <h2>Top rated movies, Tv and more</h2>
        <p>
          Watch top rated hollywood, nollywood and bollywood hits for family and
          kids----All free
        </p>
      </div>

      <div className="main-card">
        {Latest?.map((latest) => (
          <MovieCard
            key={latest.id}
            id={latest.id}
            vote_average={latest.vote_average}
            title={latest.title}
            release_date={latest.release_date}
            poster_path={latest.poster_path}
            overview={latest.overview}
            genre_ids={latest.genre_ids}
            backdrop_path={latest.backdrop_path}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestMovies;
