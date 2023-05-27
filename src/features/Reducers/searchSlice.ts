import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type searchState = string;

const initialSearch: searchState = "";

export const SearchSlice = createSlice({
  name: "searches",
  initialState: {
    initialSearch,
  },
  reducers: {
    setSearches(state, action: PayloadAction<searchState>) {
      state.initialSearch = action.payload;
    },
  },
});

export const { setSearches } = SearchSlice.actions;

export default SearchSlice.reducer;
