import React from 'react';
import {useStateValue} from '../Context/StateContext';
import {Link} from 'react-router-dom';

const HomeContent = ({id,title,overview,vote_average,release_date,first_air_date,name, poster_path}) => {

    const [, dispatch] = useStateValue();

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
        <div className = "card" key = {id}>
          <Link to={`Details/${id}`}>
        <img className="card--img"
         src= {`https://image.tmdb.org/t/p/w500${poster_path}`}
         alt="images" />
         </Link>
         <div className = "card--content">
         <p>
         <i className="fas fa-star"></i>
           {vote_average}
         </p>  
         <h1>{title || name}</h1> 
         <p>{release_date || first_air_date}</p>
         <button className="trend-btn" onClick={clickBtn}><i className="fas fa-plus"></i>Watchlist</button>
         {/*<p>OVERVIEW:{trend.overview}</p>*/}
        </div>
            </div>
    )
}

export default HomeContent;