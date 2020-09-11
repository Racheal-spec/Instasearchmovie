import React, {useState, useEffect} from 'react';
import Movie from './Movie';

const Trending = () => {

//const[query, setQuery] = useState('');
const[movies, setMovies] = useState([]);

useEffect(() => {

  const getMovies = async () =>{
    const Api_key = "6b00a02116b6c9fb27ad808ea1eaedbd";
    
    const apiUrl = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${Api_key}&language=en-US&page=1&include_adult=false`);
    const data = await apiUrl.json();
    setMovies(data.results)
    console.log(data);
  }
  getMovies();

})


return(
    <div className="search-section">
  <div className = "card-overall">
      {movies.map((movie) => (
        <Movie
        key = {movie.id}
        posterImg = {movie.poster_path}
        title = {movie.title}
        overview = {movie.overview}
        />
        ))}
       </div>
  </div>
)

}

export default Trending;