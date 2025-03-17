import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import wishListReducer from "./features/wishList/wishListSlice";
import authReducer from "./features/auth/authSlice";
import shoppingCartReducer from "./features/shoppingCart/shoppingCartSlice";
import blogReducer from "./features/blog/blogSlice";
import toastReducer from './features/toast/toastSlice';
import categoryReducer from './features/category/categorySlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    wishList: wishListReducer,
    shoppingCart: shoppingCartReducer,
    blog: blogReducer,
    toast:toastReducer,
    auth:authReducer,
    category: categoryReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
