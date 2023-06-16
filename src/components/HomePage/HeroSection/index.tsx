import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../HeroSection/index.scss";
import {
  useFetchTrendsQuery,
  useMoviesDetailsQuery,
} from "../../../features/Reducers/MoviesApiSlice/ApiSlice";
import { DetailsProp } from "../../../Types/ComponentTypes/ComponentTypes";
import { IMAGE_BASE_URL } from "../../../Api";
import TagButton from "../../Button/TagButton";
import { bgProp } from "../../../Types/ComponentTypes/HeroSectionTypes";
import { useNavigate } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";

const Herosection: React.FC = () => {
  const { data } = useFetchTrendsQuery(2);

  const [isBackgroundRepeating, setIsBackgroundRepeating] = useState(false);
  const [isBackgroundCover, setIsBackgroundCover] = useState(false);
  const [isBackgroundPosition, setIsBackgroundPosition] = useState(false);
  const [elementObj, setElementObj] = useState<DetailsProp>({
    title: data?.results[0].title || data?.results[0].name,
    backdrop_path: data?.results[0].backdrop_path,
    overview: data?.results[0].overview,
    poster_path: data?.results[0].poster_path,
  });
  const { data: moviedata } = useMoviesDetailsQuery(elementObj.id!);

  const [poster, setPoster] = useState<string>("");

  const navigate = useNavigate();
  useEffect(() => {
    const posterArray = () => {
      if (moviedata) {
        setPoster(moviedata?.poster_path!);
      }
      // setShowModal(true);
    };
    posterArray();
    // for (let i = 0; i < moviedata?.videos?.results.length!; i++) {
    //   if (videotrailer?.[i]?.type === "Trailer") {
    //     setMainTrailer(videotrailer?.[i]);
    //   }
    // }
  }, [moviedata]);

  const imagesArray = useCallback(() => {
    for (let i = 0; i < data?.results?.length!; i++) {
      const element = data?.results?.[i]!;

      setTimeout(() => {
        setElementObj(element);
        setIsBackgroundRepeating(false);
        setIsBackgroundCover(false);
        setIsBackgroundPosition(false);
      }, 12000 * (i + 1));
    }
  }, [data?.results]);

  useEffect(() => {
    imagesArray();
  }, [imagesArray]);

  let firstRender = useRef(false);

  useEffect(() => {
    if (firstRender.current) {
      return;
    }
    if (data?.results) {
      setElementObj(data?.results?.[0]);
      firstRender.current = true;
    }
  }, [data?.results]);

  let bgStyles: bgProp = {
    background: `linear-gradient(to bottom,rgba(13, 18, 18, 0.598),#1e1e1e 90%),url(${IMAGE_BASE_URL}${
      elementObj.backdrop_path
    }) ${isBackgroundRepeating ? "repeat" : "no-repeat"} ${
      isBackgroundPosition ? "center" : "center"
    }/${isBackgroundCover ? "contain" : "cover"}`,
  };

  let posterStyles: bgProp = {
    background: `linear-gradient(to bottom,rgba(0, 139, 139, 0.598) 40%,#1e1e1e 90%),url(${IMAGE_BASE_URL}${poster}) ${
      isBackgroundRepeating ? "repeat" : "no-repeat"
    } ${isBackgroundPosition ? "center" : "center"}/${
      isBackgroundCover ? "contain" : "cover"
    }`,
  };

  const truncate = (str: string, length: number) => {
    if (str?.length > length) {
      return str?.slice(0, length) + "...";
    } else {
      return str;
    }
  };

  console.log(poster);
  return (
    <div style={bgStyles}>
      <section className="first-section">
        <div className="marqueEl">{elementObj.title}</div>
        <div className="heroDiv">
          <div className="heroDescriptionDiv">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {elementObj.title
                ? elementObj.title
                : "loading..." || elementObj.name
                ? elementObj.name
                : "loading..."}
            </motion.h1>
            {moviedata?.tagline ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <q> {truncate(moviedata?.tagline, 50)}</q>
              </motion.p>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <q> {truncate(elementObj?.overview!, 50)}</q>
              </motion.p>
            )}
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Date: <span>{elementObj.release_date}</span>
            </motion.h4>
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Duration: <span>{moviedata?.runtime} minutes</span>
            </motion.h4>
            <div className="genrediv">
              {moviedata?.genres?.map((genre) => (
                <TagButton key={genre.id} title={genre.name} />
              ))}
            </div>
          </div>

          <div className="iframeStyle">
            <div className="poster_img" style={posterStyles}></div>
          </div>

          <div className="watchbtndiv">
            <button
              className="watchbtn"
              onClick={() => navigate(`/Details/${elementObj.id}`)}
            >
              <BsPlayFill fontSize={"1.5rem"} className="playicon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Herosection);
