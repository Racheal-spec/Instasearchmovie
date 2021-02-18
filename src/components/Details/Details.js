import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../Context/StateContext';


const Details = ({id,title,overview,vote_average,release_date,first_air_date,name, poster_path}) => {
  const[, dispatch] = useStateValue();
  const[details, setDetails] = useState([]);
  let slug = useParams();
  console.log(slug);


  const clickBtn= () => {
    dispatch({
      type: 'ADD_TO_WATCHLIST',
      movie: {
        id: id,
        title: title,
        vote_average: vote_average,
        release_date: release_date,
        poster_path: poster_path,
        overview: overview
      },
    })
  }

useEffect(() => {
 const getDetails = async () => {
  const Api_key = "6b00a02116b6c9fb27ad808ea1eaedbd";
 
  const apiUrl = await fetch(`https://api.themoviedb.org/3/movie/id?api_key=${Api_key}&language=en-US&page=1&include_adult=false`);
  const data = await apiUrl.json();
  setDetails(data);
  console.log(data);
 }
getDetails();
}, [id])
  
if(slug){
  let detail = Object.keys(details).find(detail => detail.params === slug);
  console.log(detail);

  if(detail){
    return {...details} 
}
}

   return(

    <div className = "watch-card" key = {id}>
    <img className="watchcard--img"
     src= {`https://image.tmdb.org/t/p/w500${poster_path}`}
     alt="images" />
     <div className = "watchcard--content">
     <p>
     <i className="fas fa-star"></i>
       {vote_average}
     </p>  
     <h1>{title || name}</h1> 
     <p>{release_date || first_air_date}</p>
     <p>{overview}</p>
     
     <button className="trend-btn" onClick={clickBtn}><i className="fas fa-plus"></i>Watchlist</button>
    </div>
        </div>
   )

}

export default Details;