import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "ticketSlice",
  initialState: {
    tickets: [],
    loading: false,
  },
  reducers: {
    createBug(state, action) {},
    updateBug(state, action) {},
    markComplete(state, action) {},
  },
  extraReducers: (builder) => {
    builder.addCase(getTickets.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getTickets.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getTickets.fulfilled, (state, action) => {
      state.loading = false;
      state.tickets = action.payload.tickets;
    });
  },
});

export const getTickets = createAsyncThunk("api/tickets", async (thunkAPI) => {
  const response = await fetch("api/tickets", {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return response;
});

export default slice.reducer;
