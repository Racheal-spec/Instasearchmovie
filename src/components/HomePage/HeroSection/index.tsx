import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../HeroSection/index.scss";
import {
  useFetchTrendsQuery,
  useMoviesDetailsQuery,
} from "../../../features/Reducers/MoviesApiSlice/ApiSlice";
import { DetailsProp } from "../../../Types/ComponentTypes/ComponentTypes";
import { URL_YOUTUBE } from "../../../Api";
import { VideosProp } from "../../../Types/APITypes";
import TagButton from "../../Button/TagButton";
import { bgProp } from "../../../Types/ComponentTypes/HeroSectionTypes";

const Herosection: React.FC = () => {
  const { data, isLoading } = useFetchTrendsQuery();

  const [isBackgroundRepeating, setIsBackgroundRepeating] = useState(false);
  const [isBackgroundCover, setIsBackgroundCover] = useState(false);
  const [isBackgroundPosition, setIsBackgroundPosition] = useState(false);
  const [elementObj, setElementObj] = useState<DetailsProp>({
    title: data?.results[0].title,
    backdrop_path: data?.results[0].backdrop_path,
    overview: data?.results[0].overview,
  });
  const { data: moviedata } = useMoviesDetailsQuery(elementObj.id!);

  const [videotrailer, setVideoTrailer] = useState<VideosProp[]>([]);
  const [maintrailer, setMainTrailer] = useState<VideosProp>({
    name: "",
    iso_639_1: "",
    iso_3166_1: "",
    key: "",
    site: "",
    size: 0,
    type: "",
    official: false,
    published_at: "",
    id: "",
  });
  // console.log(moviedata) ?.videos?.results!;

  // console.log(maintrailer);

  useEffect(() => {
    const videoArray = () => {
      if (moviedata) {
        setVideoTrailer(moviedata.videos?.results!);
      }
    };
    videoArray();
    for (let i = 0; i < moviedata?.videos?.results.length!; i++) {
      if (videotrailer?.[i]?.type === "Trailer") {
        setMainTrailer(videotrailer?.[i]);
      }
    }
  }, [moviedata, videotrailer]);

  const imagesArray = useCallback(() => {
    for (let i = 0; i < data?.results?.length!; i++) {
      const element = data?.results?.[i]!;

      setTimeout(() => {
        setElementObj(element);
        setIsBackgroundRepeating(false);
        setIsBackgroundCover(false);
        setIsBackgroundPosition(false);
      }, 12000 * (i + 1));

      // return () => {
      //   // clears timeout before running the new effect
      //   clearTimeout(timeout);
      // };
    }
  }, [data?.results]);

  useEffect(() => {
    imagesArray();
  }, [imagesArray]);

  let bgStyles: bgProp = {
    background: `linear-gradient(to bottom,rgba(0, 0, 0, 0.849) 60%,rgba(0, 139, 139, 0.598)),url(https://image.tmdb.org/t/p/w500${
      elementObj.backdrop_path
    }) ${isBackgroundRepeating ? "repeat" : "no-repeat"} ${
      isBackgroundPosition ? "center" : "center"
    }/${isBackgroundCover ? "contain" : "cover"}`,
  };
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
              {elementObj.title || elementObj.name}
            </motion.h1>
            {moviedata?.tagline ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <q> {moviedata?.tagline}</q>
              </motion.p>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <q> {elementObj.overview}</q>
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
                <TagButton title={genre.name} />
              ))}
            </div>
          </div>

          <div className="iframeStyle" key={maintrailer?.key}>
            <iframe
              width="323px"
              height="326px"
              frameBorder="0"
              title={maintrailer?.name}
              src={`${URL_YOUTUBE}${maintrailer?.key}`}
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Herosection);
