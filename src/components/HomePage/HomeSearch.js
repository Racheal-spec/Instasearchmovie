import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSearched } from '../Actions/Action';
import './Home.scss';
import SearchList from './SearchList';
import {motion} from 'framer-motion';

const HomeSearch = () => {
    const[searches, setSearches] = useState('');
    const[results, setResults] = useState(false);
    const[click, setClick] = useState(false);
    const dispatch = useDispatch();
    const {Searched} = useSelector(state => state.Movies);
         
    const updateResults = (e) =>{
        setSearches(e.target.value);  
      }
      const getResults = (e) =>{
        e.preventDefault();
        dispatch(loadSearched(searches));
        setResults(true);
        setSearches('');
      }
      const btnClick = () => {
        setClick(!click);
    }
  
    return (
        <div className= "searchResult">
       <section className= "first-section">
            <motion.h1 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.5, duration: 1}}
            >Welcome to Instamoviesearch.<br /> 
            Now you can search your favourite movie and explore.
            </motion.h1>
        <div className="search-section">
        <form className = "search-form" onSubmit={getResults}>
          <input className = "search-input" name="query" type = "text"
           value={searches}
           placeholder="Search your favourite movie"
           onChange={updateResults} />
          <button className = "search-btn" type = "submit">search</button>
        </form>
      
       {results && (
         <div className="search-result">  
        <div className= {click? "cancel" : ""}>
        <h2>Search Results</h2> 
       <div className= "search-card">
       <div className= "cancel-btn">
          <i className="far fa-times-circle" onClick={btnClick}></i>
          </div>
          {
          Searched.filter((result) => result.poster_path).map((result) => (
           <SearchList
           key= {result.id}
           id= {result.id}
           vote_average={result.vote_average}
           title = {result.title || result.name}
           release_date = {result.release_date || result.first_air_date}
           poster_path = {result.poster_path}
           />
          )) 
          } 
</div>

     </div>
         </div>
       )}
         </div>
       
        </section>
        </div>
    )
}

export default HomeSearch;