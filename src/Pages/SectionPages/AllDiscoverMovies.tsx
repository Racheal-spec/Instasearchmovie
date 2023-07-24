import React, { useState } from "react";
import MovieCard from "../../components/MovieCard/MoviesCard";
import { useDiscoverMoviesQuery } from "../../features/Reducers/MoviesApiSlice/ApiSlice";
import undrawsearch from "../../images/undrawsearch.svg";
import GlobalTitle from "../../components/GlobalTitle/title";
import Button from "../../components/Button";
import "./sectionpages.scss";

const AllDiscoverMovies = () => {
  const [page, setPage] = useState(1);
  const { data } = useDiscoverMoviesQuery(page);

  const loadPrev = () => {
    setPage((prevstate) => prevstate - 1);
  };
  const loadNext = () => {
    setPage((prevstate) => prevstate + 1);
  };
  return (
    <section className="searchsection">
      {data?.results.length === 0 ? (
        <div className="searchImgDiv">
          <img src={undrawsearch} alt="search-placeholder" />
          <p>No latest movie available</p>
        </div>
      ) : (
        <div className="search-result">
          <div>
            <GlobalTitle title="Now Showing" description="" />

            <div className="search-card">
              {data?.results
                .filter((result) => result.poster_path)
                .map((result) => (
                  <MovieCard
                    key={result.id}
                    id={result.id}
                    vote_average={result.vote_average}
                    title={result.title}
                    release_date={result.release_date}
                    poster_path={result.poster_path}
                  />
                ))}
            </div>
          </div>
          <div className="btnClass">
            <Button outline onClick={loadPrev} arialabel="load-previous">
              Prev &#171;
            </Button>
            <div className="btnNext">
              <Button outline onClick={loadNext} arialabel="load-next">
                Next &#187;
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AllDiscoverMovies;
