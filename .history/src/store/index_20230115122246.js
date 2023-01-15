import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducers: {
    auth: authSlice.reducer,
  },
});
