import React, {useState, useEffect} from 'react';

const HomeDiscover = () => {

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
         <div className = "card" key = {trend.id}>
         <img className="card--img"
          src= {`https://image.tmdb.org/t/p/w500${trend.poster_path}`}
          alt="images" />
          <div className = "card--content">
          <p>
          <i className="fas fa-star"></i>
            {trend.vote_average}
          </p>  
          <h1>{trend.title || trend.name}</h1> 
          <p>{trend.release_date || trend.first_air_date}</p>
          <button className="trend-btn"><i className="fas fa-plus"></i>Watchlist</button>
          {/*<p>OVERVIEW:{trend.overview}</p>*/}
         </div>
             </div>
        ))}
       </div>
  </div>
)

}

export default HomeDiscover;