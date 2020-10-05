
import React from 'react';
import {Link} from 'react-router-dom';

const Search = ({title, posterImg, overview}) => {

  //let {path, url} = useRouteMatch;
return (
    <div className= "card">
       <Link to={`/HomeDiscover/${title}`}>
      <img  className="card--img" src = {`https://image.tmdb.org/t/p/w500${posterImg}`}
       alt= 'Images' />
       </Link>
     <div className = "cardContent">
     <h1> 
     <Link to={`/HomeDiscover/${title}`}>{title}
     </Link>
     </h1> 
    <p>OVERVIEW:{overview}</p>
    </div>
    </div>

)

}

export default Search;