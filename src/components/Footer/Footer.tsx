import React from 'react';
import './Footer.scss';

const Footer = () => {

return (
    <section>
<footer>
    <div className="footerClass">
    <ul>
   <h1>IMS</h1>
<p>Instasearchmovie uses the TMDB Api and is not released under the MIT license.</p>
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
<p>&copy; developed by RachelTomi</p>   
  </ul>
    </div>
    </footer>
    </section>
)
}

export default Footer;