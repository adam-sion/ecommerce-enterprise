import { createSlice } from "@reduxjs/toolkit";

const initialLikes = JSON.parse(localStorage.getItem("likes")) || {};
const initialState = {
  likes: initialLikes,
};

const wishListSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    toggleLike(state, action) {
      const productId = action.payload;
      const updatedLikes = { ...state.likes };
      updatedLikes[productId] = !state.likes[productId];
      localStorage.setItem("likes", JSON.stringify(updatedLikes));
      return { ...state, likes: updatedLikes };
    },
    addLike(state, action) {
      const productId = action.payload;
      const updatedLikes = { ...state.likes, [productId]: true };
      localStorage.setItem("likes", JSON.stringify(updatedLikes));
      return { ...state, likes: updatedLikes };
    },
    removeLike(state, action) {
      const productId = action.payload;
      const updatedLikes = { ...state.likes };
      delete updatedLikes[productId];
      localStorage.setItem("likes", JSON.stringify(updatedLikes));
      return { ...state, likes: updatedLikes };
    },
  },
});

export default wishListSlice.reducer;
export const { toggleLike, addLike, removeLike } = wishListSlice.actions;
