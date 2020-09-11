import React, {useState, useEffect} from 'react';
import Search from './Search';


const HomeDiscover = () => {
 const[query, setQuery] = useState('mulan');
 const[searches, setSearches] = useState('');
 const[results, setResults] = useState([]);
 
    useEffect(() => {
     searchMovies();
 }, [query])

 const searchMovies = async () => {
    const Api_key = "6b00a02116b6c9fb27ad808ea1eaedbd";

    const searchUrl = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&page=1&include_adult=false&query=${query}`);
    const response = await searchUrl.json();
    console.log(response);
    setResults(response.results);
}
const updateResults = (e) =>{
    e.preventDefault();
  setSearches(e.target.value);
}
const getResults = (e) =>{
    setQuery(e.target.value);
  }

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
        </section>
        <section className= "secondSection">
            <div className="titleClass">
            <div className="underline"></div>
            <h1>Your Favourite Movies</h1>
            </div>
            <div className= "card-overall">
        {results.filter((result) => result.poster_path).map((result)=>(
        <Search 
        key= {result.id}
        posterImg= {result.poster_path}
        title = {result.title}
        
        />
      ))}
      </div>
       
    </section> 
    </div>
)

}

  export default HomeDiscover;