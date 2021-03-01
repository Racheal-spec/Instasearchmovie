import React from 'react';
import HomeTrending from './HomeTrending';
import LatestMovies from './LatestMovies';
import MovieDiscover from './MovieDiscover';
import './Home.scss';
import { useSelector } from 'react-redux';
import HomeSearch from './HomeSearch';

const Home = () =>{

    const isLoading = useSelector(state => state.Movie);

    return (
        <>
         {!isLoading && (
<div>
<HomeSearch /> 
<HomeTrending />
<MovieDiscover />
<LatestMovies /> 
</div>
)}
</>
    )
}

export default Home;