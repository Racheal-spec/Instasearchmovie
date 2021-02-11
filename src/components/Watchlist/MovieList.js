import React from 'react';
import {useStateValue} from '../Context/StateContext';

const MovieList = ({id,title,overview,vote_average,release_date,first_air_date,name, poster_path}) => {

    const [, dispatch] = useStateValue();

    const removeBtn= () => {
        dispatch({
          type: 'REMOVE_FROM_WATCHLIST',
          id: id
        })
      }
 
    return(
        <div className = "watch-card" key = {id}>
        <img className="watchcard--img"
         src= {`https://image.tmdb.org/t/p/w500${poster_path}`}
         alt="images" />
         <div className = "watchcard--content">
         <p>
         <i className="fas fa-star"></i>
           {vote_average}
         </p>  
         <h1>{title || name}</h1> 
         <p>{release_date || first_air_date}</p>
         <p>{overview}</p>
         <button className="watch-btn" onClick={removeBtn}>Remove from Watchlist</button>
        </div>
            </div>
    )
}

export default MovieList;