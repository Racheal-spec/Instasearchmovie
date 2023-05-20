import React, { useEffect, useState } from "react";
import "./App.scss";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";

import Loader from "./components/Loader/Loader";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
const Watchlist = React.lazy(() => import("./components/Watchlist/Watchlist"));
const Details = React.lazy(() => import("./Pages/Details/Details"));
const App = () => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(false);
  }, [setIsloading]);

  return (
    <>
      {isLoading === false ? (
        <>
          <div className="app">
            <Nav />
            <React.Suspense fallback={<h2>Loading...</h2>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/watchlist"
                  element={
                    <Watchlist
                      id={0}
                      title={""}
                      overview={""}
                      vote_average={0}
                      release_date={""}
                      poster_path={""}
                    />
                  }
                />
                {/* <Route path="HomeSearch/:id" element={<Details />} /> */}
                <Route path="/Details/:id" element={<Details />} />
              </Routes>
            </React.Suspense>
          </div>
          <Footer />
          <div></div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default App;
