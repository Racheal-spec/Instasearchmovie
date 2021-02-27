import React, { useEffect} from 'react';
import HomeContent from './HomeContent';
import {useDispatch, useSelector} from 'react-redux';
import {loadMovies} from '../Actions/Action';

const HomeTrending = () => {

  const dispatch = useDispatch();

useEffect(() => {
dispatch(loadMovies());
}, [dispatch])

const {Trends} = useSelector(state => state.Movies);
return(
    <div className="main-section">
      <div className="title">
        <h1>Trending Movies</h1>
        <div className="line"></div>
      </div>
  <div className = "main-card">
    
      {Trends.map((trend) => (
         <HomeContent
          key= {trend.id}
          id= {trend.id}
          vote_average={trend.vote_average}
          title = {trend.title || trend.name}
          release_date = {trend.release_date || trend.first_air_date}
          poster_path = {trend.poster_path}
          overview = {trend.overview}
         />
      ))}
       </div>
  </div>
)

}

export default HomeTrending;