import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    isAdmin: false,
    loggedIn: false,
    loading: false,
  },
  reducers: {
    signIn(state) {},
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.loading = false;
      console.log("something bad happened!");
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          username: action.payload.username,
        };
        if (action.payload.isAdmin) {
          state.isAdmin = action.payload.isAdmin;
        }
        state.loggedIn = true;
      }
      state.loading = false;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.isAdmin = false;
      state.loggedIn = false;
      state.loading = false;
      state.user = {};
    });
  },
});

export const getUser = createAsyncThunk("api/auth", async (thunkAPI) => {
  const response = await fetch("api/auth", {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
  return response;
});

export const logoutUser = createAsyncThunk(
  "api/auth/logout",
  async (thunkAPI) => {
    const response = await fetch("api/auth/logout", {
      method: "GET",
    })
      .then((response) => response.json())
      .catch((err) => console.error(err));
    return response;
  }
);

export default slice.reducer;
