import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Movies from '../Movies';


const HomeSearch = () => {
    const[query, setQuery] = useState('');
    const[searches, setSearches] = useState('');
    const[results, setResults] = useState([]);

    const updateResults = (e) =>{
        setSearches(e.target.value);
         
      }
      const getResults = (e) =>{
        e.preventDefault();
        setQuery(searches);
        }
 
    useEffect(() => {
      const searchMovies = async () => {
        const Api_key = "6b00a02116b6c9fb27ad808ea1eaedbd";
       
    
        const searchUrl = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&page=1&include_adult=false&query=${query}`);
        const results = await searchUrl.json();
        console.log(results);
        setResults(results.results);
    }
    searchMovies();
 }, [query])
      
    return (
        <div className= "searchResult">
       <section className= "first-section">
            <h1>Welcome to Instamoviesearch.<br /> Now you can search your favourite movie and explore.</h1>
        <div className="firstSection">
        <form className = "search-form" onSubmit={getResults}>
          <input className = "search-input" name="query" type = "text"
           value={searches}
           placeholder="Search your favourite movie"
           onChange={updateResults} />
          <button className = "search-btn" type = "submit">search</button>
        </form>
        </div>

        <div className= "card-overall">
        {results && results.filter((result) => result.poster_path).map((result) => (
         <div className= "card" key= {result.id}>
         <Link to={`/HomeDiscover/${result.id}`}>
        <img  className="card--img" src = {`https://image.tmdb.org/t/p/w500${result.poster_path}`}
         alt= 'Images' />
         </Link>
       <div className = "cardContent">
       <h1> 
       <Link to={`/HomeDiscover/${result.id}`}>{result.title}
       </Link>
       </h1> 
        </div>
      <p>RELEASE-DATE:{result.release_date}</p>
      </div>
      
        ))}
      </div>
        </section>
        </div>
    )
}

export default HomeSearch;