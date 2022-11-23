import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    isAdmin: false,
    loggedIn: false,
  },

  reducers: {
    attemptTokenLogin(token) {
      if (!token) {
        token = window.localStorage.getItem("token");
      }
    },
    signIn(state, action) {
      const { name, password } = action.payload;

      if (name === "admin") {
        state.isAdmin = true;
      }
      state.loggedIn = true;
    },
    signOut(state) {
      state.loggedIn = false;
      state.isAdmin = false;
    },
    createUser(state, action) {},
  },
});

export const test = () => {};
export const { signIn, signOut, createUser } = slice.actions;
export default slice.reducer;
