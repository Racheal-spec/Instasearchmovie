import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../services/Hooks/hooks";
// import MovieList from './MovieList';
import undraw from "../../images/undraw-pending.svg";
import "./Watchlist.scss";
import MovieList from "./MovieList";
import { ContentProp } from "../../Types/ComponentTypes/ComponentTypes";

const Watchlist: React.FC<ContentProp> = () => {
  const watchlists = useAppSelector(
    (state) => state.watchlist.initialWatchlist
  );

  return (
    <div className="watch-msg">
      {watchlists?.length === 0 ? (
        <div className="watchmsg-div">
          <h1>Your watchlist is currently empty</h1>
          <img src={undraw} alt="empty-watchlist" />
        </div>
      ) : (
        <div>
          <h1>Here are your saved movies</h1>
          {watchlists.map((list) => (
            <div className="watchlist-card" key={list.id}>
              <MovieList
                id={list.id}
                title={list.title}
                poster_path={list.poster_path}
                vote_average={list.vote_average}
                release_date={list.release_date}
                overview={list.overview}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
