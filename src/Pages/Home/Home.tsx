import React from "react";
import HomeTrending from "../../components/HomePage/HomeTrending/HomeTrending";
import LatestMovies from "../../components/HomePage/LatestMovies";
import MovieDiscover from "../../components/HomePage/MovieDiscover/MovieDiscover";
import "./Home.scss";
import Brands from "../../components/HomePage/Brands/Brands";
import HomeSearch from "../../components/HomePage/HomeSearch/HomeSearch";
import { useFetchTrendsQuery } from "../../features/Reducers/MoviesApiSlice/ApiSlice";
import Herosection from "../../components/HomePage/HeroSection";
import Lists from "../../components/Lists/Lists";
import Join from "../../components/HomePage/JoinUs/Join";

const Home = () => {
  const { isLoading } = useFetchTrendsQuery();
  // console.log(data);
  return (
    <>
      {!isLoading && (
        <div>
          <Herosection />
          <div className="homewrapper">
            <HomeSearch />
            <HomeTrending />
            <Lists />
            <MovieDiscover />
            <LatestMovies />
            <Brands />
            <Join />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
