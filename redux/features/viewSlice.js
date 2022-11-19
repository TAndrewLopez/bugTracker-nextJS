import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "view",
  initialState: {
    sidebarOpen: true,
  },
  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export default slice.reducer;
export const { toggleSidebar } = slice.actions;
