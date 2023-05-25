import React, { useState } from "react";
import { useFetchTrendsQuery } from "../../../services/MoviesApiSlice/ApiSlice";
import GlobalTitle from "../../GlobalTitle/title";
import "./HomeTrending.scss";
import MovieCard from "../../MovieCard/MoviesCard";
import arrowleft from "../../../images/arrowleft.png";
import arrowright from "../../../images/arrowright.png";

const HomeTrending = () => {
  const { data, isLoading } = useFetchTrendsQuery();
  const [click, setClick] = useState(false);
  const [clickright, setClickRight] = useState(false);
  const Trends = data?.results;
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadMovies());
  // }, [dispatch]);

  const handleArrowLeft = () => {
    setClick(true);
    console.log("click left");
  };

  const handleArrowRight = () => {
    setClickRight(true);
    console.log("click right");
  };

  return (
    <div className="main-section">
      <GlobalTitle title="Trending Movies" />
      <div className="arrowicon">
        <div onClick={handleArrowLeft}>
          <img src={arrowleft} alt="arrow-left" />
        </div>
        <div onClick={handleArrowRight}>
          <img src={arrowright} alt="arrow-right" />
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
