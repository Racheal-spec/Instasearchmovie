import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSearched } from '../Actions/Action';
import './Home.scss';
import HomeContent from './HomeContent';

const HomeSearch = () => {
    const[searches, setSearches] = useState('');
    const[click, setClick] = useState(false);
    const dispatch = useDispatch();
    const {Searched} = useSelector(state => state.Movies);
    
    useEffect(()=> {
      btnClick(); 
    }, [])//eslint-disable-line react-hooks/exhaustive-deps
         
    const updateResults = (e) =>{
        setSearches(e.target.value);  
      }
      const getResults = (e) =>{
        e.preventDefault();
        dispatch(loadSearched(searches));
        setSearches('');
      }
        const btnClick = () => {
          setClick(!click);
      }
  
    return (
        <div className= "searchResult">
       <section className= "first-section">
            <h1>Welcome to Instamoviesearch.<br /> Now you can search your favourite movie and explore.</h1>
        <div className="search-section">
        <form className = "search-form" onSubmit={getResults}>
          <input className = "search-input" name="query" type = "text"
           value={searches}
           placeholder="Search your favourite movie"
           onChange={updateResults} />
          <button className = "search-btn" type = "submit">search</button>
        </form>
        </div>
       
        <div className={click? "card-overall" : "cancel"}>
        <div className= "search-card">
        <div className="cancel-btn">
           <i className="far fa-times-circle" onClick={btnClick}></i>
           </div>
           {Searched.length === 0 ? (
          <p>You haven't searched any movie</p>
          ) : (
          Searched && Searched.filter((result) => result.poster_path).map((result) => (
            <HomeContent
            key= {result.id}
            id= {result.id}
            vote_average={result.vote_average}
            title = {result.title || result.name}
            release_date = {result.release_date || result.first_air_date}
            poster_path = {result.poster_path}
            />
           ))
    )
         
        } 
     
</div>

      </div>
      
      
        </section>
        </div>
    )
}

export default HomeSearch;