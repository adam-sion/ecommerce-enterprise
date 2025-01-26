import { createSlice } from "@reduxjs/toolkit";

// Function to get the products from the cart from localStorage
const getCartFromLocalStorage = () => {
  const cartJSON = localStorage.getItem("cart");
  return cartJSON ? JSON.parse(cartJSON) : [];
};

const initialState = {
  cart: getCartFromLocalStorage(), // Get cart products from localStorage on startup
  notificationVisible: false,
  productAdded: null,
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addProduct(state, action) {
      // Check if the product is already in the cart
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      // If the product is already in the cart, do not add it again
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity += action.payload.quantity;
        return state;
      }

      // If the product is not in the cart, add it
      state.cart.push(action.payload);

      // Save cart products to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    showNotification(state, action) {
      state.notificationVisible = true;
      state.productAdded = action.payload;
    },
    removeNotification(state) {
      state.notificationVisible = false;
    },
    deleteProduct(state, action) {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      // Remove cart product from localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseProductQtity(state, action) {
      const product = state.cart.find(
        (product) => product.id === action.payload
      );
      product.quantity++;
      product.totalPrice = product.quantity * product.unitPrice;

      // Update cart product from localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseProductQtity(state, action) {
      const product = state.cart.find(
        (product) => product.id === action.payload
      );
      product.quantity--;
      product.totalPrice = product.quantity * product.unitPrice;
      if (product.quantity === 0)
        shoppingCartSlice.caseReducers.deleteProduct(state, action);
      // Update cart product from localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    resetShoppingCart(state) {
      state.cart = [];
      // Reset localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const {
  addProduct,
  showNotification,
  removeNotification,
  deleteProduct,
  increaseProductQtity,
  decreaseProductQtity,
  resetShoppingCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;

export const getTotalCartQtity = (state) =>
  state.shoppingCart.cart.reduce((accum, curr) => curr.quantity + accum, 0);

export const getTotalCartPrice = (state) =>
  state.shoppingCart.cart.reduce((accum, curr) => curr.totalPrice + accum, 0);

export const getCurrentQtityById = (id) => (state) =>
  state.shoppingCart.cart.find((product) => product.id === id)?.quantity ?? 1;
