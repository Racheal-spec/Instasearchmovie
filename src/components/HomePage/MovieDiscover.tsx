import React from "react";
import { useDiscoverMoviesQuery } from "../../services/MoviesApiSlice/ApiSlice";
import HomeContent from "./HomeContent";

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
      <div className="title">
        <h1>Discover new movies</h1>
      </div>
      <div className="discover-card">
        {Discover?.map((discover) => (
          <HomeContent
            key={discover.id}
            id={discover.id}
            vote_average={discover.vote_average}
            title={discover.title}
            release_date={discover.release_date}
            poster_path={discover.poster_path}
            overview={discover.overview}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieVideo;
