//Base Url
const BASE_URL = "https://api.themoviedb.org/3/";

const Api_key = "6b00a02116b6c9fb27ad808ea1eaedbd";

//MOVIES URL

const TrendingMovies = `trending/all/day?api_key=${Api_key}&language=en-US&page=1&include_adult=false`;
const LatestMovies = `movie/top_rated?api_key=${Api_key}&language=en-US&page=1&include_adult=false`;
const DiscoverMovies = `discover/tv?api_key=${Api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`;

export const TrendingMoviesURL = ()=> `${BASE_URL}${TrendingMovies}`;
export const LatestMoviesURL = () => `${BASE_URL}${LatestMovies}`;
export const DiscoverMoviesURL = () => `${BASE_URL}${DiscoverMovies}`;
//MOVIE DETAILS
export const movieDetailsURL = (movie_id) => `${BASE_URL}movie/${movie_id}?api_key=${Api_key}&language=en-US&include_adult=false&append_to_response=videos`;