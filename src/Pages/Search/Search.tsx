import React from "react";
import MovieCard from "../../components/MovieCard/MoviesCard";
import { setSearches } from "../../features/Reducers/searchSlice";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { useSearchMoviesQuery } from "../../services/MoviesApiSlice/ApiSlice";
import "./Search.scss";
import undrawsearch from "../../images/undrawsearch.svg";

const Search: React.FC = () => {
  const searches = useAppSelector((state) => state.searches.initialSearch);
  const { data, isLoading, isError } = useSearchMoviesQuery(searches);
  const dispatch = useAppDispatch();

  const updateResults = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearches(e.target.value));
  };
  console.log(data);
  return (
    <section className="searchsection">
      <input
        className="search-input"
        name="query"
        type="text"
        value={searches}
        placeholder="Search your favourite movie"
        onChange={updateResults}
      />
      <div className="cancelX" onClick={() => dispatch(setSearches(""))}>
        X
      </div>
      {data?.results.length === 0 ? (
        <div className="searchImgDiv">
          <img src={undrawsearch} alt="search-placeholder" />
          <p>Waiting for search...</p>
        </div>
      ) : (
        <div className="search-result">
          <div>
            <h3>
              Search Results for <span>"{searches}"</span>
            </h3>
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
        </div>
      )}
    </section>
  );
};

export default Search;
