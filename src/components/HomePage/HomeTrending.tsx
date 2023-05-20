import React from "react";
import { useFetchTrendsQuery } from "../../services/MoviesApiSlice/ApiSlice";
import HomeContent from "./HomeContent";

const HomeTrending = () => {
  const { data, isLoading } = useFetchTrendsQuery();
  const Trends = data?.results;
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadMovies());
  // }, [dispatch]);

  return (
    <div className="main-section">
      <div className=""></div>
      <div className="title">
        <h1>Trending Movies</h1>
        <div className="line"></div>
      </div>
      <div className="main-card">
        {Trends?.map((trend) => (
          <HomeContent
            key={trend.id}
            id={trend.id}
            vote_average={trend.vote_average}
            title={trend.title}
            release_date={trend.release_date}
            poster_path={trend.poster_path}
            overview={trend.overview}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeTrending;
