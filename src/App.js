import React from 'react';
import './App.scss';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Watchlist from './components/Watchlist/Watchlist';
import Home from './components/HomePage/Home';
import Details from './components/Details/Details';

const App = () => {
 
  return( 
    <Router>
  <div className = 'app'>
  <Nav />
  <Switch>
  <Route path= '/' exact component={Home} />
  <Route path= '/watchlist' component={Watchlist} />
  <Route path= '/:slug' component={Details} />
  <Route path= 'HomeSearch/:id' component={Details} />
  </Switch>
    </div>
    <Footer />
    </Router>
)

    }

export default App;
  
