import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { IMAGE_BASE_URL, URL_YOUTUBE } from "../../Api";
import Button from "../../components/Button";
import TagButton from "../../components/Button/TagButton";
import Card from "../../components/Card/Card";
import GlobalTitle from "../../components/GlobalTitle/title";
import { addToWatchlist } from "../../features/Reducers/watchlistSlice";
import { useAppDispatch } from "../../services/Hooks/hooks";
import {
  useMoviesDetailsQuery,
  useSimilarMoviesQuery,
} from "../../features/Reducers/MoviesApiSlice/ApiSlice";
import {
  ContentProp,
  DetailsProp,
} from "../../Types/ComponentTypes/ComponentTypes";
import "./Details.scss";
import { bgProp } from "../../Types/ComponentTypes/HeroSectionTypes";
import { FaTimes } from "react-icons/fa";
import { VideosProp } from "../../Types/APITypes";

const Details: React.FC<DetailsProp> = () => {
  let idParam = useParams();
  let detailId: string = idParam.id!;
  const { data, isLoading } = useMoviesDetailsQuery(detailId);

  const dispatch = useAppDispatch();
  //  //Similar Movies
  const { data: similars } = useSimilarMoviesQuery(detailId);
  const movie: ContentProp = {
    id: data?.id!,
    title: data?.title!,
    vote_average: data?.vote_average!,
    release_date: data?.release_date!,
    poster_path: data?.poster_path!,
    overview: data?.overview,
  };
  const [showModal, setShowModal] = useState(false);
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
  useEffect(() => {
    for (let i = 0; i < data?.videos?.results.length!; i++) {
      if (data?.videos?.results?.[i]?.type === "Trailer") {
        setMainTrailer(data?.videos?.results?.[i]);
      }
    }
  }, [data?.videos?.results]);

  const clickBtn = () => {
    dispatch(addToWatchlist(movie));
    toast.success("Movie added to watchlist!", {
      className: "toast",
    });
  };
  let isBackgroundCover = false;
  let isBackgroundRepeating = false;
  let isBackgroundPosition = false;

  let detailsBg: bgProp = {
    background: `linear-gradient(rgba(13, 18, 18, 0.598) 10%,#232323 80%),url(${IMAGE_BASE_URL}${
      data?.backdrop_path || data?.poster_path
    }) ${isBackgroundRepeating ? "repeat" : "no-repeat"} ${
      isBackgroundPosition ? "center" : "center"
    }/${isBackgroundCover ? "contain" : "cover"}`,
  };
  return (
    <section>
      {!isLoading && (
        <div className="moviedetail-page" key={detailId}>
          <div className="detail-content">
            <div style={detailsBg} className="moviedetail-wrapper">
              <div className="imgDiv">
                <img
                  className="lozad"
                  src={`${IMAGE_BASE_URL}${data?.poster_path!}`}
                  alt="images"
                />
              </div>
              <div className="moviedetail-content">
                <div className="genre">
                  {data?.genres!.map((genre) => (
                    <div key={genre.id}>
                      <TagButton key={genre.id} title={genre.name} />
                    </div>
                  ))}
                </div>
                <h1>{data?.title}</h1>
                <p className="rating">
                  <i className="fas fa-star"></i>
                  {data?.vote_average?.toPrecision(2)}
                </p>
                <p>{data?.release_date}</p>
                <p>{data?.overview}</p>

                <h5>
                  Official Website:{" "}
                  <span>
                    {" "}
                    <a href={data?.homepage}>{data?.homepage}</a>
                  </span>
                </h5>

                <h5>Duration: {data?.runtime} mins</h5>
                <div className="modalBtnDiv">
                  <Button
                    onClick={clickBtn}
                    primary
                    arialabel="add-movie-to-watchlist-button"
                  >
                    Add movie to watchlist
                  </Button>
                  <Button
                    onClick={() => setShowModal(true)}
                    outline
                    arialabel="watch-trailer-button"
                  >
                    Watch Trailer
                  </Button>
                </div>
                {showModal ? (
                  <div className="modal">
                    <iframe
                      key={maintrailer?.key}
                      title={maintrailer?.name}
                      src={`${URL_YOUTUBE}${maintrailer?.key}`}
                      allowFullScreen
                      className="framecss"
                    />

                    <div className="cancel" onClick={() => setShowModal(false)}>
                      <FaTimes />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="moviestyles">
              {/************ MOVIE TRAILERS SECTION ***********************/}
              <div className="movie-video">
                <GlobalTitle title="Other Trailers" description="" />
                <div className="videodiv">
                  {data?.videos!.results!.slice(0, 4).map((video) => (
                    <iframe
                      key={video.id}
                      title={video.name}
                      src={`${URL_YOUTUBE}${video.key}`}
                      allowFullScreen
                    />
                  ))}
                </div>
              </div>
              {/************ MOVIE COMPANIES SECTION ***********************/}
              <div className="companies">
                <GlobalTitle title="Production Companies" description="" />
                <div className="companies-list">
                  {data?.production_companies!.map((companies) => (
                    <div className="prodImgDiv" key={companies.id}>
                      {companies.logo_path === null ? (
                        <div className="noImageDiv">No Logo Found</div>
                      ) : (
                        <img
                          src={`https://image.tmdb.org/t/p/w500${companies.logo_path}`}
                          className="lozad"
                          alt={companies.name}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/************ SIMILAR MOVIES SECTION ***********************/}
              <div className="similarsect">
                <GlobalTitle
                  title={`Movies like ${data?.title}`}
                  description=""
                />
                <div className="similarDiv">
                  {similars?.results?.map((similar) => (
                    <div key={similar.id} className="similar-card">
                      {similar.poster_path === null ? (
                        <div className="noImageDiv">No Image Found</div>
                      ) : (
                        <>
                          <Card
                            key={similar.id}
                            id={similar.id}
                            title={similar.title}
                            poster_path={similar.poster_path}
                            release_date={similar.release_date}
                            vote_average={similar.vote_average}
                            original_language={similar.original_language}
                            adult={similar.adult}
                          />
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Details;
