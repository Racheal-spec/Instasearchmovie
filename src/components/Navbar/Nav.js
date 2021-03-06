import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import './Nav.scss';
import { useSelector } from 'react-redux';

const Nav = () => {

const {watchlists} = useSelector(state => state.Movies);

return (
 <nav>
   <motion.div className="navbar"
   initial={{y: -200}}
   animate={{y: 0}}
   transition={{delay: 0.2, type: 'spring', stiffness: 60}}
   >
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
    <li>Watchlist [{watchlists?.length}]</li>
    </Link>
</ul>
   </div>
   </motion.div>
</nav>
)

}

export default Nav;