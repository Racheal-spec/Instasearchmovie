import React from "react";
import { useLazySearchMoviesQuery } from "../../../features/Reducers/MoviesApiSlice/ApiSlice";
import GlobalTitle from "../../GlobalTitle/title";
import "./HomeSearch.scss";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";
import { setSearches } from "../../../features/Reducers/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../services/Hooks/hooks";

const HomeSearch: React.FC = () => {
  const [searchtrigger] = useLazySearchMoviesQuery();
  const navigate = useNavigate();
  const searches = useAppSelector((state) => state.searches.initialSearch);
  const dispatch = useAppDispatch();

  const updateResults = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearches(e.target.value));
  };
  const getResults = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchtrigger(searches);
    navigate(`/search?query=${searches}`);
    setSearches("");
  };

  return (
    <div className="searchResult">
      <GlobalTitle
        title="Search"
        description=" Search your favourite movies Search your favourite movies Search your
          favourite movies Search your favourite movies"
      />
      <div></div>
      <div className="search-section">
        <form className="search-form" onSubmit={getResults}>
          <input
            className="search-input"
            name="query"
            type="text"
            value={searches}
            placeholder="Search your favourite movie"
            onChange={updateResults}
          />
          <Button type="submit" primary>
            search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HomeSearch;
