import React from 'react';
import './App.css';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Watchlist from './components/Watchlist/Watchlist';
import Home from './components/HomePage/Home';


const App = () => {
 
  return( 
    <Router>
  <div className = 'app'>
  <Nav />
  <Switch>
  <Route path= '/' exact component={Home} />
  <Route path= '/HomeSearch/:id' component={Home} />
  <Route path= '/watchlist' component={Watchlist} />
  </Switch>
    </div>
    <Footer />
    </Router>
)

    }

export default App;
  
