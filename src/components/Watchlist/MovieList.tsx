import React from "react";
import { remove } from "../../features/Reducers/watchlistSlice";
import { useAppDispatch } from "../../services/hooks";
import { ContentProp } from "../../Types/ComponentTypes/ComponentTypes";

const MovieList: React.FC<ContentProp> = ({
  id,
  title,
  overview,
  vote_average,
  release_date,
  first_air_date,
  name,
  poster_path,
}) => {
  const dispatch = useAppDispatch();

  const movie = {
    id: id,
    title: title,
    vote_average: vote_average,
    release_date: release_date,
    poster_path: poster_path,
    overview: overview,
  };
  const removeBtn = () => {
    dispatch(remove(movie.id));
  };

  return (
    <div>
      <div className="watch-card" key={id}>
        <img
          className="watchcard--img"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="images"
        />
        <div className="watchcard--content">
          <p>
            <i className="fas fa-star"></i>
            {vote_average}
          </p>
          <h1>{title || name}</h1>
          <p>{release_date || first_air_date}</p>
          <p>{overview}</p>
          <button className="watch-btn" onClick={removeBtn}>
            Remove Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
