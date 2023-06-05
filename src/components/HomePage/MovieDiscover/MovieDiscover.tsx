import React from "react";
import { useDiscoverMoviesQuery } from "../../../features/Reducers/MoviesApiSlice/ApiSlice";
import { CommonContentProp } from "../../../Types/globalTypes";
import Button from "../../Button";
import Card from "../../Card/Card";
import GlobalTitle from "../../GlobalTitle/title";
import "./MovieDiscover.scss";
import arrow from "../../../images/Arrow 1.png";
import { useNavigate } from "react-router-dom";

const MovieVideo = () => {
  let navigate = useNavigate();

  const handleMore = () => {
    navigate("/discover");
  };

  const { data, isLoading } = useDiscoverMoviesQuery(1);

  const Discover = data?.results;

  return (
    <div className="discover-section">
      <div>
        <GlobalTitle
          title="Now Showing"
          description="Discover movies showing in cinemas all over the world"
        />
      </div>
      <div className="discoverWrapper">
        <div className="discover-card">
          {Discover?.slice(0, 5).map((discover: CommonContentProp) => (
            <div className="discoverDiv" key={discover.id}>
              <Card
                key={discover.id}
                id={discover.id}
                title={discover.title || discover?.name!}
                release_date={
                  discover.release_date || discover?.first_air_date!
                }
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
          <div className="btnStyle" onClick={handleMore}>
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
