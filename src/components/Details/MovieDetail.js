import React from 'react';
import { useStateValue } from '../Context/StateContext';


const MovieDetail = ({id,title,overview,vote_average,release_date,first_air_date,name, poster_path}) => {
   
    const[, dispatch] = useStateValue();
    const clickBtn= () => {
        dispatch({
          type: 'ADD_TO_WATCHLIST',
          movie: {
            id: id,
            title: title,
            vote_average: vote_average,
            release_date: release_date,
            poster_path: poster_path,
            overview: overview
          },
        })
      }
    return(
        <div className = "trending-card"> 
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
       <button className="trend-btn" onClick={clickBtn}><i className="fas fa-plus"></i>Watchlist</button>
      </div>
          </div>
       
         </div>
    )
}

export default MovieDetail;