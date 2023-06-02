import {
  BASE_URL,
  DiscoverMovies,
  GenreListURL,
  LatestMovies,
  movieDetailsURL,
  searchedMoviesURL,
  similarMovieURL,
  TrendingMovies,
} from "../../../Api";

//ACTION CREATOR

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GenresType, MoviesType } from "../../../Types/APITypes";
import {
  DetailsProp,
  SimilarsResponse,
} from "../../../Types/ComponentTypes/ComponentTypes";

export const moviesApiSlice = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      fetchTrends: builder.query<MoviesType, void>({
        query: () => {
          return TrendingMovies;
        },
      }),
      searchMovies: builder.query<MoviesType, string>({
        query: (searches) => {
          return searchedMoviesURL(searches);
        },
      }),
      latestMovies: builder.query<MoviesType, void>({
        query: () => {
          return LatestMovies;
        },
      }),
      discoverMovies: builder.query<MoviesType, void>({
        query: () => {
          return DiscoverMovies;
        },
      }),
      moviesDetails: builder.query<Partial<DetailsProp>, string | number>({
        query: (movie_id) => {
          return movieDetailsURL(movie_id);
        },
      }),
      similarMovies: builder.query<Partial<SimilarsResponse>, string>({
        query: (movie_id) => {
          return similarMovieURL(movie_id);
        },
      }),
      genresMoviesList: builder.query<GenresType, void>({
        query: () => {
          return GenreListURL;
        },
      }),
    };
  },
});

export const {
  useFetchTrendsQuery,
  useLatestMoviesQuery,
  useDiscoverMoviesQuery,
  useLazySearchMoviesQuery,
  useMoviesDetailsQuery,
  useSimilarMoviesQuery,
  useGenresMoviesListQuery,
  useSearchMoviesQuery,
} = moviesApiSlice;
