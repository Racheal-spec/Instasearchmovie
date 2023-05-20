import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContentProp } from "../../Types/ComponentTypes/ComponentTypes";

type watchlistState = ContentProp[];

const initialWatchlist: watchlistState = [];

export const WatchlistSlice = createSlice({
  name: "watchlist",
  initialState: {
    initialWatchlist,
  },
  reducers: {
    addToWatchlist(state, action: PayloadAction<ContentProp>) {
      state.initialWatchlist.push(action.payload);
    },
    remove(state, action: PayloadAction<number>) {
      let movieid = action.payload;
      if (movieid) {
        state.initialWatchlist = state.initialWatchlist.filter((list) => {
          return list.id !== movieid;
        });
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload}) as it's not in your watchlist!`
        );
      }
    },
  },
});

export const { addToWatchlist, remove } = WatchlistSlice.actions;

export default WatchlistSlice.reducer;
