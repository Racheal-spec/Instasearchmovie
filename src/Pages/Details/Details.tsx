import React from "react";
import { useParams } from "react-router-dom";
import {
  useMoviesDetailsQuery,
  useSimilarMoviesQuery,
} from "../../services/MoviesApiSlice/ApiSlice";
import { DetailsProp } from "../../Types/ComponentTypes/ComponentTypes";
import "./Details.scss";

const Details: React.FC<DetailsProp> = () => {
  let idParam = useParams();
  let detailId: string = idParam.id!;
  const { data, isLoading } = useMoviesDetailsQuery(detailId);

  //Youtube trailer URL
  const URL_YOUTUBE = "https://www.youtube.com/embed/";

  //  //Similar Movies
  const { data: similars, isLoading: isLoadingSimilar } =
    useSimilarMoviesQuery(detailId);

  return (
    <div>
      {!isLoading && (
        <div className="moviedetail-page" key={detailId}>
          <div className="detail-content">
            <h1>{data?.title}</h1>
            <h4>{data?.tagline}</h4>
            <div className="moviedetail-wrapper">
              <img
                className="lozad"
                src={`https://image.tmdb.org/t/p/w500${data?.poster_path!}`}
                alt="images"
              />
              <div className="moviedetail-content">
                <h5>Overview</h5>
                <p>{data?.overview}</p>
                <h5>Rating</h5>
                <p>
                  <i className="fas fa-star"></i>
                  {data?.vote_average}
                </p>
                <h5>Official Website</h5>
                <a href={data?.homepage}>{data?.homepage}</a>
                <h5>Duration: {data?.runtime} mins</h5>
                <h5>Release Date</h5>
                <p>{data?.release_date}</p>
                <div className="genre">
                  <h5>Genres</h5>
                  {data?.genres!.map((genre) => (
                    <li key={genre.id}>
                      <p>{genre.name}</p>
                    </li>
                  ))}
                </div>
              </div>
            </div>
            <h3>Trailers</h3>
          </div>

          <div className="movie-video">
            {data?.videos!.results.map((video) => (
              <div key={video.id}>
                <iframe
                  title={video.name}
                  src={`${URL_YOUTUBE}${video.key}`}
                  allowFullScreen
                />
              </div>
            ))}
          </div>
          <div className="companies">
            <h3>Production Companies</h3>
            <div className="companies-list">
              {data?.production_companies!.map((companies) => (
                <li key={companies.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${companies.logo_path}`}
                    className="lozad"
                    alt={companies.name}
                  />

                  <p>{companies.name}</p>
                </li>
              ))}
            </div>
          </div>

          <h3>Movies like {data?.title}</h3>
          <div className="similar-section">
            {similars?.results?.map((similar) => (
              <div key={similar.id} className="similar-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${similar.poster_path}`}
                  className="lozad"
                  alt="images"
                />
                <h5>{similar.title}</h5>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
