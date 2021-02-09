import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
const Nav = () => {

return (
 <nav>
   <div className="navbar">
    <div className="logo">
    <Link to='/' className="link">
    <h2>IMS</h2>
    </Link>
    </div>   
   <div className="navbar-list">
   <ul className="navLists">
    <Link to='/' className="link">
    <li>Home</li>
    </Link>
    <Link to='/watchlist' className="link">
    <li>Watchlist</li>
    </Link>
</ul>
   </div>
   </div>
</nav>
)

}

export default Nav;