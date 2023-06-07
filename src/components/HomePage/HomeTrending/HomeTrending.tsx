import React, { useState } from "react";
import { useFetchTrendsQuery } from "../../../features/Reducers/MoviesApiSlice/ApiSlice";
import GlobalTitle from "../../GlobalTitle/title";
import "./HomeTrending.scss";
import MovieCard from "../../MovieCard/MoviesCard";
import { useNavigate } from "react-router-dom";
import { ContentProp } from "../../../Types/ComponentTypes/ComponentTypes";

const HomeTrending: React.FC<ContentProp> = () => {
  const { data, isLoading } = useFetchTrendsQuery(1);
  const Trends = data?.results;
  let navigate = useNavigate();

  const handleMore = () => {
    navigate("/trending");
  };

  return (
    <div className="main-section">
      <GlobalTitle title="Trending Movies" description="" />
      <div className="arrowicon">
        <div onClick={handleMore}>
          <div className="arrowcss">
            <span>more</span>
            &#187;
          </div>
        </div>
      </div>

      <div className="main-card">
        {Trends?.map((trend) => (
          <MovieCard
            key={trend.id}
            id={trend.id}
            vote_average={trend.vote_average}
            title={trend.title}
            release_date={trend.release_date}
            poster_path={trend.poster_path}
            overview={trend.overview}
            genre_ids={trend.genre_ids}
            backdrop_path={trend.backdrop_path}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeTrending;
