import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default store;
