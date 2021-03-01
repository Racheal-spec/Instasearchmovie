import React from 'react';
import { useDispatch } from 'react-redux';
import {loadDetail} from '../Actions/detailAction';
import {Link} from 'react-router-dom';


const HomeContent = ({id,title,overview,vote_average,release_date,first_air_date,name, poster_path}) => {

  
  const dispatch = useDispatch();

  const detailHandler = () => {
    dispatch(loadDetail(id))
  }

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
      <Link to={`Details/${title}`} onClick={detailHandler}>
      <img className="card--img"
       src= {`https://image.tmdb.org/t/p/w500${poster_path}`}
       alt="images" />
       </Link>
         <div className = "card--content">
         <p>
         <i className="fas fa-star"></i>
           {vote_average}
         </p>  
         <h5>{title || name}</h5> 
         <p>{release_date || first_air_date}</p>
         <button className="click-btn" onClick={clickBtn}><i className="fas fa-plus"></i>Watchlist</button>
        </div>
            </div>
    )
}

export default HomeContent;