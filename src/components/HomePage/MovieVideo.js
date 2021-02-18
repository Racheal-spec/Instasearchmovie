import React, { useEffect, useState} from 'react';
import HomeContent from './HomeContent';

const MovieVideo = () => {

const[videos, setVideos] = useState([]);

useEffect(() => {

  const getVideos = async () =>{
    const Api_key = "6b00a02116b6c9fb27ad808ea1eaedbd";

    const apiUrl = await fetch(`https://api.themoviedb.org/3/movie/297762/videos?api_key=${Api_key}&language=en-US&page=1&include_adult=false`);
    const data = await apiUrl.json();
    setVideos(data.results)
    console.log(data);
  }
  getVideos();

}, [])


return(
    <div className="search-section">
      <div className="title">
        <h1>Trailers</h1>
        <div className="line"></div>
      </div>
  <div className = "trending-card">
      {videos.map((trend) => (
         <HomeContent 
          key= {trend.id}
          id= {trend.id}
          /*
          vote_average={trend.vote_average}
          title = {trend.title}
          release_date = {trend.release_date}
          poster_path = {trend.poster_path}
          overview = {trend.overview}
          */
         />
        ))}
       </div>
  </div>
)

}

export default MovieVideo;