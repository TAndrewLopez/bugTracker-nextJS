import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "ticketSlice",
  initialState: {
    tickets: [],
    loading: false,
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

      state.tickets = action.payload.tickets.sort((a, b) => a.id - b.id);
    });
    builder.addCase(createTicket.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createTicket.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createTicket.fulfilled, (state, action) => {
      state.loading = false;
    });
  },
});

export const getTickets = createAsyncThunk("getTickets", async (thunkAPI) => {
  const response = await fetch("api/tickets", {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return response;
});

export const createTicket = createAsyncThunk(
  "createTicket",
  async (form, thunkAPI) => {
    const response = await fetch("api/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    return response;
  }
);

export default slice.reducer;
