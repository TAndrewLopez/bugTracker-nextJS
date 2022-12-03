import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    id: -1,
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    isAdmin: false,
    loggedIn: false,
    loading: false,
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
        const { id, firstName, lastName, username, email, isAdmin } =
          action.payload;
        if (isAdmin) {
          state.isAdmin = isAdmin;
        }
        state.id = id;
        state.firstName = firstName;
        state.lastName = lastName;
        state.username = username;
        state.email = email;
        state.loggedIn = true;
      }
      state.loading = false;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.id = -1;
      state.firstName = "";
      state.lastName = "";
      state.username = "";
      state.email = "";
      state.isAdmin = false;
      state.loggedIn = false;
      state.loading = false;
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
