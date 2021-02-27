import React from 'react';
import './Details.scss';
import { useSelector } from 'react-redux';

const Details = () => {

  const {details} = useSelector(state => state.Detail);

  const videos = useSelector(state => state.Detail.details.videos);
  console.log(videos);


  return(
    <div className = "moviedetail-page" key = {details.id || details.Im}> 
    <div className="detail-content">
      <h1>{details.title || details.name}</h1>
      <h4>{details.tagline}</h4>
      <div className = "moviedetail-wrapper" >
      <img className="card--img"
       src= {`https://image.tmdb.org/t/p/w500${details.poster_path}`}
       alt="images" />
       <div className = "moviedetail-content">
        <h5>Overview</h5>
       <p>{details.overview}</p>
       <h5>Rating</h5>
       <p>
       <i className="fas fa-star"></i>
         {details.vote_average}
       </p>
       <h5>Release Date</h5>  
       <p>{details.release_date || details.first_air_date}</p>
      </div>
          </div>
       <div className="movie-video">
         { /*
           videos && videos.map((video) => (
          <div>
              {video.id}
            {video.size}
            {video.site}
          </div>
           ))
           */ }
     
       </div>
       </div>
         </div>
  )
}

export default Details;
  
  