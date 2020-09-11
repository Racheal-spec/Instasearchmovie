import React from 'react';
import {Link} from 'react-router-dom';
const Nav = () => {

const navStyle = {
    color: 'white'
};

return (
 <nav>
     <h2>IMS</h2>
<ul className="navLists">
<Link to='/' style={navStyle}>
    <li>Home</li>
    </Link>
    <Link to='/trending' style={navStyle}>
    <li>Trending</li>
    </Link>
    <Link to='/watchlist' style={navStyle}>
    <li>Watchlist</li>
    </Link>
</ul>
</nav>
)

}

export default Nav;