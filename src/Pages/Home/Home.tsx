import React from "react";
import HomeTrending from "../../components/HomePage/HomeTrending";
import LatestMovies from "../../components/HomePage/LatestMovies";
import MovieDiscover from "../../components/HomePage/MovieDiscover";
import "./Home.scss";
import Brands from "../../components/HomePage/Brands";
import HomeSearch from "../../components/HomePage/HomeSearch";
import { useFetchTrendsQuery } from "../../services/MoviesApiSlice/ApiSlice";

const Home = () => {
  const { data = [], isLoading } = useFetchTrendsQuery();
  console.log(data);
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
  );
};

export default Home;
