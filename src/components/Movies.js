
import React, {useState, useEffect} from 'react';

const Movies = () => {

  //let { HomeDiscoverId} = useParams();

const[Ids, setIds] = useState([]);
const[query, setQuery] = useState('');

useEffect(() => {

  const getMovieDetails = async () =>{
    const Api_key = "6b00a02116b6c9fb27ad808ea1eaedbd";
    const apiUrl = await fetch(`https://api.themoviedb.org/3/movie/api_id=${19995}?api_key=${Api_key}&language=en-US`);
    const data = await apiUrl.json();
    setIds(data)
    console.log(data);
  }
  getMovieDetails();

}, [query])

const getMovie = (e) =>{
   setQuery(e.target.value);
}

return(
     <div className= "card-overall">
       <h1>Moviesssss</h1>
 </div>
)

}

export default Movies;
