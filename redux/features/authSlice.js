import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("api/auth", async (token, thunkAPI) => {
  const options = {
    method: "GET",
    headers: {
      token,
    },
  };
  const response = fetch("api/auth", options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
});

// TODO:CREATE NEW THUNK FOR GETTING TOKEN SO IT WON'T BE DECLARED IN COMPONENTS
export const getToken = createAsyncThunk(
  "api/login",
  async (form, thunkAPI) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    };

    const { token } = await fetch("api/auth/login", options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }
);

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
        state.loggedIn = true;
        if (action.payload.isAdmin) {
          state.isAdmin = action.payload.isAdmin;
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
