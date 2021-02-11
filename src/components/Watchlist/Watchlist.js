import React from 'react';
import { useStateValue } from '../Context/StateContext';
import MovieList from './MovieList';
import './Watchlist.css';
const Watchlist = () => {

const[{watchlists}] = useStateValue();

return (
<div className="watch-msg">
    {watchlists?.length === 0 ? (
        <h2>You haven't saved any movie yet</h2>
    ) : (
        <div>
        <h2>Here are your saved movies</h2>
        {watchlists.map((list)=>(
            <div className="watchlist-card"  key={list.id} >
                <MovieList
            id = {list.id}
            title = {list.title}
            poster_path = {list.poster_path}
            vote_average = {list.vote_average}
            release_date = {list.release_date}
            overview = {list.overview}
            />
            </div>
        ))}
        </div>
    )

}
</div> 

)

}

export default Watchlist;