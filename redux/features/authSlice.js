import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    isAdmin: false,
    loggedIn: false,
    token: "",
    status: null,
  },
  reducers: {
    signIn(state, action) {
      const { name, password } = action.payload;
      state.isAdmin = true;
      state.loggedIn = true;
    },
    signOut(state) {
      state.loggedIn = false;
      state.isAdmin = false;
    },
  },
});

export const { signIn, signOut } = slice.actions;
// export const {} = slice.actions;
export default slice.reducer;
