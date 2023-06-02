import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Nav.scss";
import { useAppSelector } from "../../services/Hooks/hooks";
import Button from "../Button";
import { supabase } from "../../config/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

const Nav: React.FC = () => {
  const watchlists = useAppSelector(
    (state) => state.watchlist.initialWatchlist
  );
  const [color, setColor] = useState("");
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      setColor("#2c2e2e");
    } else {
      setColor("transparent");
    }
  }, [color, location.pathname]);

  const SignOutUser = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <nav style={{ backgroundColor: color }}>
      <motion.div
        className="navbar"
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 60 }}
      >
        <div className="logo">
          <Link to="/" className="link">
            <h3>InstaMovieSearch</h3>
          </Link>
        </div>
        <div className="navbar-list">
          <ul className="navLists">
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="/watchlist" className="link">
              <li>
                Watchlist{" "}
                <span className="listLengthSpan">{watchlists?.length}</span>
              </li>
            </Link>
          </ul>
        </div>

        <div className="navbar-list">
          <ul className="navLists">
            <div className="btnClass">
              {" "}
              <Button primary onClick={() => navigate("/login")}>
                Sign Up
              </Button>
            </div>
            <Button outline onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button outline onClick={() => SignOutUser()}>
              Sign Out
            </Button>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Nav;
