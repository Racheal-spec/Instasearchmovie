import React from "react";
import { useAppSelector } from "../../services/Hooks/hooks";
import { useGenresMoviesListQuery } from "../../features/Reducers/MoviesApiSlice/ApiSlice";
import GlobalTitle from "../GlobalTitle/title";
import ListCard from "../ListCard/ListCard";
import "./List.scss";

const Lists: React.FC = () => {
  const watchlists = useAppSelector(
    (state) => state.watchlist.initialWatchlist
  );
  const { data: genredata } = useGenresMoviesListQuery();

  return (
    <section className="main-section">
      <GlobalTitle
        title="Lists"
        description="List of all movies added to your watchlist"
      />

      <div>
        {watchlists.length === 0 ? (
          <div className="nolist">
            <p>You have not added any movie to your list.</p>
          </div>
        ) : (
          <div className="listWrapper">
            {watchlists.map((list) => (
              <ListCard
                key={list.id}
                genIds={list.genre_ids}
                title={list.title}
                genres={genredata?.genres}
                vote_average={list.vote_average}
                backdrop_path={list.backdrop_path}
                poster_path={list.poster_path}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(Lists);
