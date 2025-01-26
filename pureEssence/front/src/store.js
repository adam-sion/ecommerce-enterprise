import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import wishListReducer from "./features/wishList/wishListSlice";
import shoppingCartReducer from "./features/shoppingCart/shoppingCartSlice";
import blogReducer from "./features/blog/blogSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    wishList: wishListReducer,
    shoppingCart: shoppingCartReducer,
    blog: blogReducer,
  },
});

export default store;
