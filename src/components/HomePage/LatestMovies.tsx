import React from "react";
import { useLatestMoviesQuery } from "../../services/MoviesApiSlice/ApiSlice";
import HomeContent from "./HomeContent";

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
      <div className="title">
        <h1>Top Rated Movies</h1>
        <div className="line"></div>
      </div>
      <div className="main-card">
        {Latest?.map((latest) => (
          <HomeContent
            key={latest.id}
            id={latest.id}
            vote_average={latest.vote_average}
            title={latest.title}
            release_date={latest.release_date}
            poster_path={latest.poster_path}
            overview={latest.overview}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestMovies;
