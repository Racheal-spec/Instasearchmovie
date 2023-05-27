import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "../features/Reducers/watchlistSlice";
import { moviesApiSlice } from "./MoviesApiSlice/ApiSlice";
import searchReducer from "../features/Reducers/searchSlice";

export const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
    searches: searchReducer,
    [moviesApiSlice.reducerPath]: moviesApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(moviesApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
