import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../Actions/Action';
import HomeContent from './HomeContent';

const MovieVideo = () => {

const dispatch = useDispatch();

useEffect(() => {
dispatch(loadMovies());
}, [dispatch])

const {Discover} = useSelector(state => state.Movies);
return(
    <div className="discover-section">
      <div className="title">
        <h1>Discover new movies</h1>
      </div>
  <div className = "discover-card">
      {Discover.map((discover) => (
         <HomeContent 
          key= {discover.id}
          vote_average={discover.vote_average}
          title = {discover.name}
          release_date = {discover.release_date|| discover.first_air_date}
          poster_path = {discover.poster_path}
          overview = {discover.overview}
        
         />
      ))}
       </div>
  </div>
)

}

export default MovieVideo;