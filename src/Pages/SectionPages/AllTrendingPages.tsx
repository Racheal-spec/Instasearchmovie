import React, { useState } from "react";
import MovieCard from "../../components/MovieCard/MoviesCard";
import { useFetchTrendsQuery } from "../../features/Reducers/MoviesApiSlice/ApiSlice";
import undrawsearch from "../../images/undrawsearch.svg";
import GlobalTitle from "../../components/GlobalTitle/title";
import Button from "../../components/Button";
import "./sectionpages.scss";

const AllTrendingPages = () => {
  const [page, setPage] = useState(1);
  const { data } = useFetchTrendsQuery(page);

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
          <p>No Trending Movie Available</p>
        </div>
      ) : (
        <div className="search-result">
          <div>
            <GlobalTitle title="Trending" description="" />

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
            <Button outline onClick={loadPrev}>
              Prev &#171;
            </Button>
            <div className="btnNext">
              <Button outline onClick={loadNext}>
                Next &#187;
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AllTrendingPages;
