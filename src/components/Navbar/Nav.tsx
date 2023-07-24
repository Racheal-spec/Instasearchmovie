import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Nav.scss";
import { useAppSelector } from "../../services/Hooks/hooks";
import Button from "../Button";
import { supabase } from "../../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserDataQuery } from "../../features/Reducers/UserSplice/UserSplice";
import UseAuth from "../../services/Hooks/UseAuth";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav: React.FC = () => {
  const watchlists = useAppSelector(
    (state) => state.watchlist.initialWatchlist
  );
  const { data: userdata } = useUserDataQuery();
  const { newsession } = UseAuth(userdata);
  const [color, setColor] = useState("");
  const [showprofile, setShowProfile] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  let location = useLocation();
  let navigate = useNavigate();
  let navRef = useRef<HTMLButtonElement>(null);

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  useEffect(() => {
    if (location.pathname === "/") {
      setColor("transparent");
    } else if (location.pathname !== "/Details") {
      setColor("transparent");
    } else {
      setColor("#2c2e2e");
    }
  }, [color, location.pathname]);

  const handleProfile = () => {
    setShowProfile(!showprofile);
  };

  const showNavBar = () => {
    navRef?.current?.classList.toggle("responsive_nav");
  };

  return (
    <div className="headerWrapper">
      <header style={{ backgroundColor: colorChange ? "#232323" : color }}>
        <div className="logo">
          <Link to="/" className="link" aria-label="link to home page">
            <h3>InstaMovieSearch</h3>
          </Link>
        </div>
        <nav ref={navRef}>
          <motion.div
            className="navbar"
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 60 }}
          >
            <div className="navLists">
              <Link
                to="/"
                onClick={showNavBar}
                className="link"
                aria-label="link to home page"
              >
                Home
              </Link>
              <Link
                to="/watchlist"
                onClick={showNavBar}
                className="link"
                aria-label="link to watchlists page"
              >
                Watchlist{" "}
                <span className="listLengthSpan">{watchlists?.length}</span>
              </Link>
            </div>

            <div className="navLists">
              <div className="btnClass">
                {" "}
                {newsession?.user !== undefined ? (
                  <div className="profilediv">
                    <h4>Hey, {newsession?.user.user_metadata.name}</h4>
                    <img
                      src={newsession?.user.user_metadata.avatar_url}
                      alt="user"
                      onClick={handleProfile}
                    />
                    {showprofile && <Profile />}
                  </div>
                ) : (
                  <div className="btnSignIn">
                    <Button
                      primary
                      onClick={() => {
                        navigate("/login");
                        navRef?.current?.classList.toggle("responsive_nav");
                      }}
                      arialabel="signin-button"
                    >
                      Sign In
                    </Button>
                  </div>
                )}
              </div>

              <button
                onClick={showNavBar}
                aria-label="close-menu-button"
                className=" nav-closebtn nav-btn"
              >
                <FaTimes />
              </button>
            </div>
          </motion.div>
        </nav>
        <button
          aria-label="menu-button"
          onClick={showNavBar}
          className="nav-btn"
        >
          <FaBars />
        </button>
      </header>
    </div>
  );
};

export default Nav;

export const Profile = () => {
  let navigate = useNavigate();

  const SignOutUser = async () => {
    let signout = await supabase.auth.signOut();

    if (signout) {
      window.location.reload();
      toast.success("You have successfully signed out!");
      navigate("/");
    }
  };
  return (
    <div>
      <div className="signoutDiv">
        <Link
          to="/"
          onClick={SignOutUser}
          className="profilelink"
          aria-label="link to signout"
        >
          <ul>
            <li>Sign Out</li>
          </ul>
        </Link>
      </div>
    </div>
  );
};
