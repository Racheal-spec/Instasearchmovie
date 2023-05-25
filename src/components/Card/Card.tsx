import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { loadDetail } from "../MoviesApiSlice/detailAction";
import { Link } from "react-router-dom";
import lozad from "lozad";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CommonContentProp } from "../../Types/globalTypes";
import { addToWatchlist } from "../../features/Reducers/watchlistSlice";
import { useAppDispatch } from "../../services/hooks";
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
          <p>
            <i className="fas fa-star"></i>
            {vote_average}
          </p>
          <h5>{title || name}</h5>
          <p>{release_date || first_air_date}</p>
          <motion.button
            className="click-btn"
            onClick={clickBtn}
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 1px rgb(255,255,255)",
              boxShadow: "0px 0px 5px rgb(255,255,255)",
            }}
          >
            <i className="fas fa-plus"></i>Watchlist
          </motion.button>
          <div>
            {itemAdded && (
              <div className="added">
                <h6>Movie added to watchlist</h6>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
