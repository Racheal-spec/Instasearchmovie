import React from "react";
import prime from "../../../images/amazon.png";
import vudu from "../../../images/vudu.svg";
import tmdb from "../../../images/tmdb.svg";
import kanopy from "../../../images/kanopy-logo.svg";
import netflix from "../../../images/netflixmod.png";
import hdtoday from "../../../images/hdtoday.png";
import imdb from "../../../images/imdb.png";
import twitch from "../../../images/twitchlogo.png";
import "./Brands.scss";

const Brands: React.FC = () => {
  return (
    <div className="brands">
      <div className="heading">
        <h3>We are supported by top brands all over the world</h3>
      </div>
      <div className="brands-container">
        <div className="logo">
          <img src={prime} alt="amazon-prime"></img>
        </div>
        <div className="logo">
          <img src={vudu} alt="amazon-prime"></img>
        </div>
        <div className="logo">
          <img src={tmdb} alt="amazon-prime"></img>
        </div>
        <div className="logo">
          <img src={hdtoday} alt="amazon-prime"></img>
        </div>
        <div className="logo">
          <img src={imdb} alt="amazon-prime"></img>
        </div>
        <div className="logo">
          <img src={twitch} alt="amazon-prime"></img>
        </div>
        <div className="logo">
          <img src={kanopy} alt="amazon-prime"></img>
        </div>
        <div className="logo">
          <img src={netflix} alt="amazon-prime"></img>
        </div>
      </div>
    </div>
  );
};

export default Brands;
