import React from 'react';
import './Details.scss';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const Details = () => {

  const {details} = useSelector(state => state.Detail);
  const videos = useSelector(state => state.Detail.details.videos);
  console.log(videos);


  return(
    <div className = "moviedetail-page" key = {details.id}> 
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
       <h5>Official Website</h5>
       <a href={details.homepage}>
      {details.homepage}
         </a>
       <h5>Release Date</h5>  
       <p>{details.release_date || details.first_air_date}</p>
       <div className="genre">
            <h5>Genres</h5>
            {details.genres.map((genre) => (
              <li key={genre.id}>
            <p>{genre.name}</p>
            </li>
            )) }
          </div>
      </div>
          </div>
          <div className="companies">
            <h5>Poduction Companies</h5>
            <div className="companies-list">
            {details.production_companies.map((companies) => (
              <li key={companies.id}>
             <img src={`https://image.tmdb.org/t/p/w500${companies.logo_path}`} alt={companies.name} />   
            <p>{companies.name}</p>
            </li>
            )) }
            </div>
          </div> 
       <div className="movie-video">
       {
          videos.results.map((video) => (
          <div key={video.id}>
            {video.id}
            {video.iso_639_1}
            {video.iso_3166_1}
            {video.key}
            {video.name}
            {video.size}
            {video.site}
            {video.type}
          </div>
           ))
          }
     
       </div>
       </div>
         </div>
  )
}

export default Details;
  
  