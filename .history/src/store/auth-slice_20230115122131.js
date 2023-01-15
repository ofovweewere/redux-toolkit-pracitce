import { createSlice } from "@redux/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    login(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
