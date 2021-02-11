import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { MovieProvider } from './components/Context/StateContext';
import reducer, { initialState } from './components/Context/Reducer';


ReactDOM.render(
  <React.StrictMode>
    <MovieProvider initialState={initialState} reducer={reducer}>
    <App />
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
