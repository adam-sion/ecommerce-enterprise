import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import wishListReducer from "./features/wishList/wishListSlice";
import authReducer from "./features/auth/authSlice";
import shoppingCartReducer from "./features/shoppingCart/shoppingCartSlice";
import blogReducer from "./features/blog/blogSlice";
import toastReducer from './features/toast/toastSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    wishList: wishListReducer,
    shoppingCart: shoppingCartReducer,
    blog: blogReducer,
    toast:toastReducer,
    auth:authReducer
  },
});

export default store;
