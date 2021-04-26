import React from 'react';
import './App.scss';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import loading from '../src/images/loading.jpg';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
const Watchlist = React.lazy(()=> import('./components/Watchlist/Watchlist'))
const Home = React.lazy(()=> import('./components/HomePage/Home'))
const Details = React.lazy(()=> import('./components/Details/Details'))
const App = () => {
 
  return( 
    <Router>
  <div className = 'app'>
  <Nav />
  <Switch>
  <React.Suspense fallback={<img src={loading}  alt="loader"></img>}>
  <Route path= '/' exact component={Home} />
  <Route path= '/watchlist' component={Watchlist} />
  <Route path= 'HomeSearch/:id' component={Details} />
  <Route path= '/:slug' component={Details} />
  </React.Suspense>

  </Switch>
    </div>
    <Footer />
    </Router>
)

    }

export default App;
  
