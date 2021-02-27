import React from 'react';
import HomeTrending from './HomeTrending';
import LatestMovies from './LatestMovies';
import MovieDiscover from './MovieDiscover';
import './Home.scss';
/*
import HomeSearch from './HomeSearch';



*/
const Home = () =>{

    return (
<div>
<HomeTrending />
<MovieDiscover />
<LatestMovies /> 
    {/*
    <HomeSearch />
 
   
    */}
</div>
    )
}

export default Home;