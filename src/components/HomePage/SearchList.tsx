import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CommonContentProp } from "../../Types/globalTypes";

const SearchList: React.FC<CommonContentProp> = ({
  id,
  title,
  overview,
  vote_average,
  release_date,
  first_air_date,
  name,
  poster_path,
}) => {
  const [itemAdded, setItemAdded] = useState(false);

  const dispatch = useDispatch();

  // const detailHandler = () => {
  //   dispatch(loadDetail(id));
  // };

  const clickBtn = () => {
    dispatch({
      type: "ADD_TO_WATCHLIST",
      movie: {
        id: id,
        title: title,
        vote_average: vote_average,
        release_date: release_date,
        poster_path: poster_path,
        overview: overview,
      },
    });
    setItemAdded(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setItemAdded(false);
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className="card" key={id}>
        <Link to={`Details/${id}`}>
          <img
            className="lozad"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="images"
          />
        </Link>
        <div className="card--content">
          <p>
            <i className="fas fa-star"></i>
            {vote_average}
          </p>
          <h5>{title || name}</h5>
          <p>{release_date || first_air_date}</p>
          <button className="click-btn" onClick={clickBtn}>
            <i className="fas fa-plus"></i>Watchlist
          </button>
          <div>
            {itemAdded && (
              <div className="added">
                <h6>Movie added to watchlist</h6>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchList;
