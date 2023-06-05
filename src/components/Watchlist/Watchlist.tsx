import React from "react";
import { useAppSelector } from "../../services/Hooks/hooks";
import undraw from "../../images/undraw-pending.svg";
import "./Watchlist.scss";
import MovieList from "./MovieList";
import { ContentProp } from "../../Types/ComponentTypes/ComponentTypes";
import UseAuth from "../../services/Hooks/UseAuth";
import { useUserDataQuery } from "../../features/Reducers/UserSplice/UserSplice";
import Login from "../../Pages/Login/Login";
import GlobalTitle from "../GlobalTitle/title";

const Watchlist: React.FC<ContentProp> = () => {
  const watchlists = useAppSelector(
    (state) => state.watchlist.initialWatchlist
  );
  const { data: userdata } = useUserDataQuery();
  const { newsession } = UseAuth(userdata);
  return (
    <div className="watch-msg">
      {newsession?.user !== undefined ? (
        watchlists?.length === 0 ? (
          <div className="watchmsg-div">
            <h1>Your watchlist is currently empty</h1>
            <img src={undraw} alt="empty-watchlist" />
          </div>
        ) : (
          <div className="watchlistdiv">
            <div className="watchlistheader">
              <div>
                <img
                  src={newsession?.user.user_metadata.avatar_url}
                  alt="user"
                />
              </div>
              <div>
                <h3>{newsession?.user.user_metadata.name}</h3>
                <p>
                  Member since{" "}
                  {new Date(newsession.user.email_confirmed_at!).toDateString()}
                </p>
              </div>
            </div>
            <div className="watchlistbody">
              <GlobalTitle title="Here are your saved movies" description="" />
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
          </div>
        )
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Watchlist;
