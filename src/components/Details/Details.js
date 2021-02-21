
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../Context/StateContext';

const Details = ({id,title,overview,vote_average,release_date,first_air_date,name, poster_path}) => {
  const[, dispatch] = useStateValue();
  const[details, setDetails] = useState([]);
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
 
  let {slug} = useParams();
/*  console.log(slug);*/

useEffect(() => {
 const getDetails = async () => {
  const Api_key = "6b00a02116b6c9fb27ad808ea1eaedbd";
 
  const apiUrl = await fetch(`https://api.themoviedb.org/3/movie/${slug}?api_key=${Api_key}&append_to_response=videos&language=en-US&page=1&include_adult=false`);
  const data = await apiUrl.json();
  setDetails(data);
  console.log(data);
 }
getDetails();
}, [slug])


   return(
    <div className = "trending-card"> 
   {Object.keys(details).map(()=>(
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
   
   ))
}
</div>
 
   )
   
}
/*
const oneDetail = (ownProps) => {
  const[details, setDetails] = useState([]);
  let {slug} = useParams();

  return{
     detail: details.find(detail => detail.slug === slug)
      
  }
  
}
*/
  export default Details;

  
  