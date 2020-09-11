import React from 'react';

const Movie = ({title,posterImg,overview}) => {

    return(
    <div className = "card">
    <img className="card--img"
     src= {`https://image.tmdb.org/t/p/w500${posterImg}`}
     alt="images" />
     <div className = "card--content">
     <h1>{title}</h1> 
    <p>OVERVIEW:{overview}</p>
    </div>
        </div>
    )
  
}

export default Movie;

