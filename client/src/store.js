import { configureStore } from "@reduxjs/toolkit";
import { getAllPizzaReducer } from "./reducers/pizzaReducer";
import { registerUserReducer, loginUserReducer, getAllUsersReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
// import { getUserOrdersReducer, placeOrderReducer } from "./reducers/orderReducer";
import { checkoutReducer } from "./reducers/paymentReducer";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const rootReducer = {
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  // placeOrderReducer: placeOrderReducer,
  // getUserOrdersReducer: getUserOrdersReducer,
  getAllUsersReducer: getAllUsersReducer,
  paymentReducer:checkoutReducer,
};

const initialState = {
  cartReducer: {
    cartItems: cartItems || [], 
  },
  loginUserReducer: {
    currentUser: currentUser || null, 
  }
};



const store = configureStore({
  // initialState,
  preloadedState: initialState,
  reducer: rootReducer,
});

export default store;

