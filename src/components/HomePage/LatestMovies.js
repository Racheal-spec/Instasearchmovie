import React, { useEffect, useState} from 'react';
import HomeContent from './HomeContent';
import './Home.css';

const LatestMovies = () => {

const[latest, setLatest] = useState([]);

useEffect(() => {

  const getMovies = async () =>{
    const Api_key = "6b00a02116b6c9fb27ad808ea1eaedbd";
    const apiUrl = await fetch(` https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1&include_adult=false`);
    const data = await apiUrl.json();
    setLatest(data.results)
    console.log(data);
  }
  getMovies();

}, [])


return(
    <div className="search-section">
      <div className="title">
        <h1>Top Rated Movies</h1>
        <div className="line"></div>
      </div>
  <div className = "trending-card">
      {latest.map((latest) => (
         <HomeContent
          key= {latest.id}
          id= {latest.id}
          vote_average={latest.vote_average}
          title = {latest.title}
          release_date = {latest.release_date || latest.first_air_date}
          poster_path = {latest.poster_path}
          overview = {latest.overview}
         />
        ))}
       </div>
  </div>
)

}

export default LatestMovies;