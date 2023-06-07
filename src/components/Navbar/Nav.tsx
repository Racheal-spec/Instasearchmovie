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

  const SignOutUser = async () => {
    let signout = await supabase.auth.signOut();

    if (signout) {
      window.location.reload();
      toast.success("You have successfully signed out!");
      navigate("/");
    }
  };

  const showNavBar = () => {
    navRef?.current?.classList.toggle("responsive_nav");
  };

  return (
    <header style={{ backgroundColor: colorChange ? "#232323" : color }}>
      <div className="logo">
        <Link to="/" className="link">
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
            <Link to="/" onClick={showNavBar} className="link">
              <li>Home</li>
            </Link>
            <Link to="/watchlist" onClick={showNavBar} className="link">
              <li>
                Watchlist{" "}
                <span className="listLengthSpan">{watchlists?.length}</span>
              </li>
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
                  />
                </div>
              ) : (
                <div className="btnSignIn">
                  <Button
                    primary
                    onClick={() => {
                      navigate("/login");
                      navRef?.current?.classList.toggle("responsive_nav");
                    }}
                  >
                    Sign In
                  </Button>
                </div>
              )}
              <Button
                outline
                onClick={() => {
                  SignOutUser();
                  navRef?.current?.classList.toggle("responsive_nav");
                }}
              >
                Sign Out
              </Button>
            </div>

            <button onClick={showNavBar} className=" nav-closebtn nav-btn">
              <FaTimes />
            </button>
          </div>
        </motion.div>
      </nav>
      <button onClick={showNavBar} className="nav-btn">
        <FaBars />
      </button>
    </header>
  );
};

export default Nav;
