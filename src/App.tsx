import React, { useEffect, useState } from "react";
import "./App.scss";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Search from "./Pages/Search/Search";
import { useAppSelector } from "./services/Hooks/hooks";
import Login from "./Pages/Login/Login";
import { useUserDataQuery } from "./features/Reducers/UserSplice/UserSplice";
import UseAuth from "./services/Hooks/UseAuth";

const AllTrendingPages = React.lazy(
  () => import("./Pages/SectionPages/AllTrendingPages")
);
const AllDiscoverMovies = React.lazy(
  () => import("./Pages/SectionPages/AllDiscoverMovies")
);
const AllTopRatedSeries = React.lazy(
  () => import("./Pages/SectionPages/AllTopRatedSeries")
);
const Watchlist = React.lazy(() => import("./components/Watchlist/Watchlist"));
const Details = React.lazy(() => import("./Pages/Details/Details"));
const App = () => {
  const [isLoading, setIsloading] = useState(true);
  const searches = useAppSelector((state) => state.searches.initialSearch);
  const { data: userdata } = useUserDataQuery();
  const { newsession } = UseAuth(userdata);

  useEffect(() => {
    const loaderElement = document.querySelector(".loader-container");
    if (loaderElement) {
      loaderElement.remove();
      setIsloading(!isLoading);
    }
  }, [isLoading, setIsloading]);

  if (isLoading) {
    return null;
  }
  return (
    <>
      <div className="app">
        <Nav />

        <React.Suspense fallback={<h2>Loading...</h2>}>
          <div className="wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/watchlist"
                element={
                  newsession?.user ? (
                    <Watchlist
                      id={0}
                      title={""}
                      overview={undefined}
                      release_date={""}
                      poster_path={""}
                    />
                  ) : (
                    <Login />
                  )
                }
              />
              <Route path="/trending" element={<AllTrendingPages />} />
              <Route path="/discover" element={<AllDiscoverMovies />} />
              <Route path="/topratedtv" element={<AllTopRatedSeries />} />
              <Route path="/search" element={<Search />} />
              <Route path={`/search?query=${searches}`} element={<Search />} />
              <Route path="/search/Details/:id" element={<Details />} />
              <Route path="/trending/Details/:id" element={<Details />} />
              <Route path="/discover/Details/:id" element={<Details />} />
              <Route path="/topratedtv/Details/:id" element={<Details />} />
              <Route path="/Details/:id" element={<Details />} />
            </Routes>
          </div>
        </React.Suspense>
      </div>
      <Footer />
      <div></div>
    </>
  );
};

export default App;
