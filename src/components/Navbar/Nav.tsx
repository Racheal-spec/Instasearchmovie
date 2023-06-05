import React, { useEffect, useState } from "react";
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

const Nav: React.FC = () => {
  const watchlists = useAppSelector(
    (state) => state.watchlist.initialWatchlist
  );
  const { data: userdata } = useUserDataQuery();
  const { newsession } = UseAuth(userdata);
  const [color, setColor] = useState("");
  let location = useLocation();
  let navigate = useNavigate();

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
              {newsession?.user !== undefined ? (
                <div className="profilediv">
                  <h4>Hey, {newsession?.user.user_metadata.name}</h4>
                  <img
                    src={newsession?.user.user_metadata.avatar_url}
                    alt="user"
                  />
                </div>
              ) : (
                <Button primary onClick={() => navigate("/login")}>
                  Sign In
                </Button>
              )}
              <Button outline onClick={() => SignOutUser()}>
                Sign Out
              </Button>
            </div>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Nav;
function useSupabaseAuthClient() {
  throw new Error("Function not implemented.");
}
