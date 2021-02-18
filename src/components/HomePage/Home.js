import React from 'react';
import HomeDiscover from './HomeDiscover';
import HomeSearch from './HomeSearch';
import './Home.css';
import LatestMovies from './LatestMovies';
import MovieVideo from './MovieVideo';


const Home = () =>{

    return (
<div>
    <HomeSearch />
    <HomeDiscover />
    <LatestMovies />
    <MovieVideo />
</div>
    )
}

export default Home;