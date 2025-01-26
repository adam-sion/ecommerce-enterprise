import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
};

const blogSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setBlog(state, action) {
      state.articles = action.payload;
    },
  },
});

export const { setBlog } = blogSlice.actions;

export default blogSlice.reducer;
