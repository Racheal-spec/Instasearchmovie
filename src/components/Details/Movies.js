import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Movies = () => {
  const[, setDetails] = useState([]);
  const {params} = useParams();
  console.log(params);
useEffect(() => {
 const getDetails = async () => {
  const Api_key = "6b00a02116b6c9fb27ad808ea1eaedbd";

  const apiUrl = await fetch(`https://api.themoviedb.org/3/movie/458576?api_key=${Api_key}&language=en-US&page=1&include_adult=false`);
  const data = await apiUrl.json();
  setDetails(data.results);
  console.log(data);
 }
getDetails();
}, [params])

  return(
    <div className = "trending-card"> 
      
      {/*details.map((trend) => (
         <div className="card">
          key= {trend.id}
          id= {trend.id}
          vote_average={trend.vote_average}
          title = {trend.title}
          release_date = {trend.release_date}
          poster_path = {trend.poster_path}
          overview = {trend.overview}
          </div> 
      ))*/}
        
       
       </div>
  )

}
export default Movies;