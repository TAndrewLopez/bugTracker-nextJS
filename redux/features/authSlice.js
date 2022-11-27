import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("api/auth", async (token, thunkAPI) => {
  const response = fetch("api/auth", {
    method: "GET",
    // headers: {
    //   token,
    // },
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
});

const slice = createSlice({
  name: "auth",
  initialState: {
    isAdmin: false,
    loggedIn: false,
    loading: false,
  },
  reducers: {
    signIn(state) {
      state.isAdmin = true;
      state.loggedIn = true;
    },
    signOut(state) {
      state.loggedIn = false;
      state.isAdmin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      if (action.payload) {
        // state.loggedIn = true;
        if (action.payload.isAdmin) {
          // state.isAdmin = action.payload.isAdmin;
        }
      }
      state.loading = false;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      console.log("something bad happened!");
    });
  },
});

export default slice.reducer;
export const { signOut } = slice.actions;
