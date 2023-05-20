//Base Url
export const BASE_URL = "https://api.themoviedb.org/3/";

// export const BASE_URL = `https://cors-anywhere.herokuapp.com/${BASE_URL_1}`;

export const Api_key = process.env.REACT_APP_API_KEY;

//MOVIES URL

export const TrendingMovies = `trending/all/day?api_key=${Api_key}&language=en-US&page=1&include_adult=false`;
export const LatestMovies = `movie/top_rated?api_key=${Api_key}&language=en-US&page=1&include_adult=false`;
export const DiscoverMovies = `discover/movie?api_key=${Api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`;

//MOVIE DETAILS
export const movieDetailsURL = (movie_id: string) =>
  `movie/${movie_id}?api_key=${Api_key}&language=en-US&include_adult=false&append_to_response=videos`;
//SIMILAR MOVIES
export const similarMovieURL = (movie_id: string) =>
  `movie/${movie_id}/similar?api_key=${Api_key}&language=en-US&page=1`;
//SEARCHED MOVIES
export const searchedMoviesURL = (query: string) =>
  `search/movie?api_key=${Api_key}&language=en-US&page=1&include_adult=false&query=${query}`;
