import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "view",
  initialState: {
    sidebarOpen: false,
  },
  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export default slice.reducer;
export const { toggleSidebar } = slice.actions;
