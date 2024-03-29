import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import lozad from "lozad";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CommonContentProp } from "../../Types/globalTypes";
import { addToWatchlist } from "../../features/Reducers/watchlistSlice";
import { useAppDispatch } from "../../services/Hooks/hooks";
import "./MoviesCard.scss";
import "react-toastify/dist/ReactToastify.css";
import { IMAGE_BASE_URL } from "../../Api";

const MovieCard: React.FC<CommonContentProp> = ({
  id,
  title,
  overview,
  vote_average,
  release_date,
  first_air_date,
  name,
  poster_path,
  genre_ids,
  backdrop_path,
}) => {
  const [itemAdded, setItemAdded] = useState(false);

  const dispatch = useAppDispatch();
  const movie = {
    id: id,
    title: title,
    vote_average: vote_average,
    release_date: release_date,
    poster_path: poster_path,
    overview: overview,
    genre_ids,
    backdrop_path,
  };
  const clickBtn = () => {
    dispatch(addToWatchlist(movie));

    setItemAdded(true);
  };

  const observer = lozad();
  observer.observe();

  //Framer motion
  const { ref, inView } = useInView();
  const fadeIn = useAnimation();

  useEffect(() => {
    if (inView) {
      fadeIn.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "tween",
          duration: 0.5,
        },
      });
    }

    if (!inView) {
      fadeIn.start({
        opacity: 0,
        y: "-400",
      });
    }
  }, [inView, fadeIn]);

  return (
    <>
      <motion.div ref={ref} className="moviescard" key={id} animate={fadeIn}>
        <Link to={`Details/${id}`} aria-label={`Details/${id}`}>
          <img
            className="lozad"
            data-src={`${IMAGE_BASE_URL}${poster_path}`}
            data-placeholder-background="grey"
            alt="images"
          />
        </Link>
        <div className="moviescardcontent">
          <p className="rating">
            <i className="fas fa-star"></i>
            {vote_average?.toPrecision(2)}
          </p>
          <h5>{title || name}</h5>
          <p className="releasedate">
            Released: {release_date || first_air_date}
          </p>
          <div className="plusdiv">
            <motion.button
              className="click-btn"
              onClick={clickBtn}
              aria-label="add-to-watchlist-button"
              disabled={itemAdded ? true : false}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 1px rgb(255,255,255)",
                boxShadow: "0px 0px 5px rgb(255,255,255)",
              }}
            >
              {itemAdded ? (
                <i className="fas fa-check"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MovieCard;
