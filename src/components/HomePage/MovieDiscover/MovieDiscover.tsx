import React from "react";
import { useDiscoverMoviesQuery } from "../../../services/MoviesApiSlice/ApiSlice";
import { CommonContentProp } from "../../../Types/globalTypes";
import Button from "../../Button";
import Card from "../../Card/Card";
import GlobalTitle from "../../GlobalTitle/title";
import "./MovieDiscover.scss";
import arrow from "../../../images/Arrow 1.png";

// import { loadMovies } from "../MoviesApiSlice/ApiSlice";
// import HomeContent from "./HomeContent";

const MovieVideo = () => {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(loadMovies());
  //   }, [dispatch]);

  const { data, isLoading } = useDiscoverMoviesQuery();

  const Discover = data?.results;

  return (
    <div className="discover-section">
      <div>
        <GlobalTitle title="Now Showing" />
        <p className="title">
          Discover movies showing in cinemas all over the world
        </p>
      </div>
      <div className="discoverWrapper">
        <div className="discover-card">
          {Discover?.slice(0, 5).map((discover: CommonContentProp) => (
            <div className="discoverDiv">
              <Card
                key={discover.id}
                id={discover.id}
                vote_average={discover.vote_average}
                title={discover.title}
                release_date={discover.release_date}
                poster_path={discover.poster_path}
                overview={discover.overview}
                genre_ids={discover.genre_ids}
                backdrop_path={discover.backdrop_path}
                original_language={discover.original_language}
                adult={discover.adult}
              />
            </div>
          ))}
        </div>
        <div className="moreDiv">
          <h4>More</h4>
          <p>View all movies now showing in a cinema around you.</p>
          <div className="btnStyle">
            <Button outlineDarkBtn>See all movies</Button>
            <div>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieVideo;
