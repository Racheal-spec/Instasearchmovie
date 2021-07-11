import React from 'react';
import './Details.scss';
import { useSelector } from 'react-redux';

const Details = () => {

  const {details, isLoading} = useSelector(state => state.Detail);
  const videos = useSelector(state => state.Detail.details.videos);

//Youtube trailer URL
 const URL_YOUTUBE = 'https://www.youtube.com/embed/';

 //Similar Movies
 const similars = useSelector(state=> state.Detail.similars);

  return(
    <>
    {!isLoading && (
    <div className = "moviedetail-page" key = {details.id}> 
    <div className="detail-content">
      <h1>{details.title || details.name}</h1>
      <h4>{details.tagline}</h4>
      <div className = "moviedetail-wrapper" >
      <img className="lozad"
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
       <h5>Duration: {details.runtime} mins</h5>  
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
          <h3>Trailers</h3>
          <div className="movie-video">
       {
          videos.results.map((video) => (
          <div key={video.id}>
            <iframe title={video.title} src={`${URL_YOUTUBE}${video.key}`} allowFullScreen/>
          </div>
           ))
          }
       </div>
          <div className="companies">
          <h3>Production Companies</h3>
            <div className="companies-list">
            {details.production_companies.map((companies) => (
              <li key={companies.id}>
             <img src={`https://image.tmdb.org/t/p/w500${companies.logo_path}`} 
             className="lozad" alt={companies.name}
             />   
           
            <p>{companies.name}</p>
            </li>
            )) }
            </div>
          </div> 
      
       </div>
       <h3>Movies like {details.title}</h3>
       <div className="similar-section">
       {
           similars.results.map((similar)=> (
             <div key={similar.id} className="similar-card">
             <img
            src= {`https://image.tmdb.org/t/p/w500${similar.poster_path}`}
            className="lozad"
            alt="images" />
            <h5>{similar.title}</h5>
             </div>
           ) )
         }
       </div>
         </div>
          )}
         </>
  )
}

export default Details;
  
  