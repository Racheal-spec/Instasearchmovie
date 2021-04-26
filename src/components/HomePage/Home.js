import React from 'react';
import HomeTrending from './HomeTrending';
import LatestMovies from './LatestMovies';
import MovieDiscover from './MovieDiscover';
import './Home.scss';
import { useSelector } from 'react-redux';
import HomeSearch from './HomeSearch';
import Brands from './Brands';

const Home = () =>{

    const isLoading = useSelector(state => state.Movie);

    return (
        <>
         {!isLoading && (
<div>
<HomeSearch /> 
<HomeTrending />
<LatestMovies /> 
<MovieDiscover />
<Brands />
</div>
)}
</>
    )
}

export default Home;