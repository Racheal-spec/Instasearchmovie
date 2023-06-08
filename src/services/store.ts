import { combineReducers, configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "../features/Reducers/watchlistSlice";
import { moviesApiSlice } from "../features/Reducers/MoviesApiSlice/ApiSlice";
import { UserApiSlice } from "../features/Reducers/UserSplice/UserSplice";
import searchReducer from "../features/Reducers/searchSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["watchlist", "searches"],
};
export const rootReducers = combineReducers({
  watchlist: watchlistReducer,
  searches: searchReducer,
  [moviesApiSlice.reducerPath]: moviesApiSlice.reducer,
  [UserApiSlice.reducerPath]: UserApiSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
      // serializableCheck:{
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }).concat([moviesApiSlice.middleware, UserApiSlice.middleware]);
  },
});
setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
