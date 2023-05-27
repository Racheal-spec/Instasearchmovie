import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footerClass">
        <div className="footerDesc">
          <h2>InstaMovieSearch</h2>
          <p>
            Instasearchmovie uses the TMDB Api and is not released under the MIT
            license.
          </p>
        </div>
        <div className="footerIcons">
          <p>Visit our social media platforms</p>
          <div className="icons">
            <a href="/https://twitter.com/racheltomidev">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com/racheal-spec">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://instagram.com/girlliketomi">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin-in/racheltomi">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="footercopy">
            &copy; designed & developed by RachelTomi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
