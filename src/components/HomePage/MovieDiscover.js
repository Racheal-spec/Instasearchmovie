import React, { useEffect, useState} from 'react';
import HomeContent from './HomeContent';

const MovieVideo = () => {

const[discover, setDiscover] = useState([]);

useEffect(() => {

  const getDiscover = async () =>{
    const Api_key = "6b00a02116b6c9fb27ad808ea1eaedbd";

    const apiUrl = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${Api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`);
   
    const data = await apiUrl.json();
    setDiscover(data.results)
    console.log(data);
  }
  getDiscover();

}, [])


return(
    <div className="discover-section">
      <div className="title">
        <h1>Discover new movies</h1>
      </div>
  <div className = "discover-card">
      {discover.map((discover) => (
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