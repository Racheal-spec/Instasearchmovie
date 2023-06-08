import React from "react";
import { useNavigate } from "react-router-dom";
import { useLatestMoviesQuery } from "../../features/Reducers/MoviesApiSlice/ApiSlice";
import Card from "../Card/Card";

const LatestMovies = () => {
  const { data } = useLatestMoviesQuery(1);
  const Latest = data?.results;

  let navigate = useNavigate();

  const handleMore = () => {
    navigate("/topratedtv");
  };

  return (
    <div className="main-section">
      <div className="heading">
        <h2>Top Rated Tv and Series</h2>
        <p>
          Watch top rated hollywood, nollywood and bollywood hits for family and
          kids----All free
        </p>
      </div>
      <div className="arrowicon">
        <div onClick={handleMore}>
          <div className="arrowcss">
            <span>more</span>
            &#187;
          </div>
        </div>
      </div>
      <div className="main-card">
        {Latest?.map((latest) => (
          <Card
            key={latest.id}
            id={latest.id}
            vote_average={latest.vote_average}
            title={latest?.title || latest?.name!}
            release_date={latest.release_date || latest.first_air_date!}
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
