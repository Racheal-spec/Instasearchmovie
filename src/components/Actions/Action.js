import axios from 'axios';
import {DiscoverMoviesURL, LatestMoviesURL, searchedMoviesURL, TrendingMoviesURL } from '../../Api';

//ACTION CREATOR

export const loadMovies = () => async (dispatch) => {
  //FETCH TRENDING MOVIES
  const trendUrl = await axios.get(TrendingMoviesURL());
  const latestUrl = await axios.get(LatestMoviesURL());
  const discoverURL = await axios.get(DiscoverMoviesURL());
  dispatch({
        type: 'FETCH_MOVIES',
        load: {
         Trends: trendUrl.data.results,
         Latest: latestUrl.data.results,
         Discover: discoverURL.data.results
        } 
      })
    
  }

export const loadSearched = (query) => async (dispatch) => {
const searchedData = await axios.get(searchedMoviesURL(query))

dispatch({
  type: 'SEARCHED_MOVIES',
  load: {
    Searched: searchedData.data.results
  }
})
}
 
 