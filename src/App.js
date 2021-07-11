import React, {useEffect, useState} from 'react';
import './App.scss';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import loading from '../src/images/loading.jpg';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Loader from './Loader';
import Home from './components/HomePage/Home';
const Watchlist = React.lazy(()=> import('./components/Watchlist/Watchlist'))
const Details = React.lazy(()=> import('./components/Details/Details'))
const App = () => {

  const[isLoading, setIsloading] = useState(true);

  useEffect(()=> {
    setIsloading(false)
  }, [setIsloading]) 
 

  return( 
    <>
    {isLoading === false ? (
     <Router>
       <div className = 'app'>
       <Nav />
       <Switch>
       <Route path= '/' exact component={Home} />
       <React.Suspense fallback={<h2>Loading...</h2>}>
       <Route path= '/watchlist' component={Watchlist} />
       <Route path= 'HomeSearch/:id' component={Details} />
       <Route path= '/:slug' component={Details} />
     </React.Suspense>
       </Switch>
         </div>
         <Footer />
         <div>
         </div>
       </Router>
    ) : (
     <Loader />
    )}    
 </>
 )
}

export default App;
  
