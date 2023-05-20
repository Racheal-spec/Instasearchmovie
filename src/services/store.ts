import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "../features/Reducers/watchlistSlice";
import { moviesApiSlice } from "./MoviesApiSlice/ApiSlice";

export const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
    [moviesApiSlice.reducerPath]: moviesApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(moviesApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
