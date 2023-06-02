import React, { useEffect, useState } from "react";
import "./App.scss";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Search from "./Pages/Search/Search";
import { useAppSelector } from "./services/Hooks/hooks";
import Login from "./Pages/Login/Login";
import Success from "./Pages/Success/Success";
const Watchlist = React.lazy(() => import("./components/Watchlist/Watchlist"));
const Details = React.lazy(() => import("./Pages/Details/Details"));
const App = () => {
  const [isLoading, setIsloading] = useState(true);
  const searches = useAppSelector((state) => state.searches.initialSearch);

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
              <div className="wrapper">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/success" element={<Success />} />
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
                  <Route path="/search" element={<Search />} />
                  <Route
                    path={`/search?query=${searches}`}
                    element={<Search />}
                  />
                  <Route path="/search/Details/:id" element={<Details />} />
                  <Route path="/Details/:id" element={<Details />} />
                </Routes>
              </div>
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
