import React, { useEffect, useState} from 'react';
import HomeContent from './HomeContent';
import './Home.css';

const HomeTrending = () => {

const[trends, setTrends] = useState([]);

useEffect(() => {

  const getMovies = async () =>{
    const Api_key = "6b00a02116b6c9fb27ad808ea1eaedbd";
    
    const apiUrl = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${Api_key}&language=en-US&page=1&include_adult=false`);
    const data = await apiUrl.json();
    setTrends(data.results)
    console.log(data);
  }
  getMovies();

}, [])


return(
    <div className="search-section">
      <div className="title">
        <h1>Trending Movies</h1>
        <div className="line"></div>
      </div>
  <div className = "trending-card">
      {trends.map((trend) => (
         <HomeContent
          key= {trend.id}
          id= {trend.id}
          vote_average={trend.vote_average}
          title = {trend.title}
          release_date = {trend.release_date}
          poster_path = {trend.poster_path}
          overview = {trend.overview}
         />
        ))}
       </div>
  </div>
)

}

export default HomeTrending;