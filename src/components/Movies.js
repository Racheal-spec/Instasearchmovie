
import React, {useState, useEffect} from 'react';

const Movies = ({match}) => {
  const[movies, setMovies] = useState([]);
  //const[query, setQuery] = useState('');
  
  useEffect(() => {
  
    const getMovieDetails = async () =>{
      const Api_key = "6b00a02116b6c9fb27ad808ea1eaedbd";
       const Movie_id = match.params.id;
      const apiUrl = await fetch(`https://api.themoviedb.org/3/movie/${Movie_id}?api_key=${Api_key}&append_to_response=videos,images&language=en-US`);
      const data = await apiUrl.json();
      setMovies(data);
      console.log(data);
    }
    getMovieDetails();
  }, [match.params.id])
 

  return(
    <div className= "movie-detail">

  {/*movies.map((movie, index) => (
     
  <p key={index}>OVERVIEW:{movie.videos}</p> 
    
  ))
  */}
  
      <h1>Moviesss</h1>

    </div>
)

}

export default Movies;
