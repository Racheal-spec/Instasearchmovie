import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { loadDetail } from "../MoviesApiSlice/detailAction";
import { Link } from "react-router-dom";
import lozad from "lozad";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CommonContentProp } from "../../Types/globalTypes";
import { addToWatchlist } from "../../features/Reducers/watchlistSlice";
import { useAppDispatch } from "../../services/Hooks/hooks";
import "./Card.scss";

const Card: React.FC<CommonContentProp> = ({
  id,
  title,
  overview,
  vote_average,
  release_date,
  first_air_date,
  name,
  poster_path,
  backdrop_path,
  genre_ids,
  original_language,
  adult,
}) => {
  const [itemAdded, setItemAdded] = useState(false);

  const dispatch = useAppDispatch();

  // const detailHandler = () => {
  //   dispatch(loadDetail(id));
  // };
  const movie = {
    id: id,
    title: title,
    vote_average: vote_average,
    release_date: release_date,
    poster_path: poster_path,
    overview: overview,
    backdrop_path,
    genre_ids,
  };
  const clickBtn = () => {
    dispatch(addToWatchlist(movie!));
    setItemAdded(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setItemAdded(false);
    }, 1000);
    return () => clearTimeout(timer);
  });
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

  const newReleaseDate = new Date(release_date).toDateString();

  return (
    <>
      <motion.div ref={ref} className="card" key={id} animate={fadeIn}>
        <Link to={`Details/${id}`}>
          <img
            className="lozad"
            data-src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            data-placeholder-background="grey"
            alt="images"
          />
        </Link>
        <div className="cardcontent">
          <h4>{title || name}</h4>
          <p className="lang">
            <span className="ratinglang">
              <i className="fas fa-star"></i>
              {vote_average ? vote_average.toPrecision(2) : ""}
            </span>
            {original_language} | {adult === false ? "PG" : ""}
          </p>
          <h5>Released: {newReleaseDate || first_air_date}</h5>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
