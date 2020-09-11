import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Watchlist from './components/Watchlist';
import Trending from './components/Trending';
import HomeDiscover from './components/HomeDiscover';


const App = () => {
 
  return( 
    <Router>
  <div className = 'app'>
  <Nav />
  <Switch>
  <Route path= '/' exact component={HomeDiscover} />
  <Route path= '/trending' component={Trending} />
  <Route path= '/watchlist' component={Watchlist} />
  </Switch>
    </div>
    <Footer />
    </Router>

)

    }

export default App;
  
