import React from 'react';
import HomeSearch from './HomeSearch';
import LatestMovies from './LatestMovies';
import MovieDiscover from './MovieDiscover';
import HomeTrending from './HomeTrending';


const Home = () =>{

    return (
<div>
    <HomeSearch />
    <HomeTrending />
    <MovieDiscover />
    <LatestMovies />  
</div>
    )
}

export default Home;