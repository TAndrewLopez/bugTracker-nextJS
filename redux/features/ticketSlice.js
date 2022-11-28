import { createSlice } from "@reduxjs/toolkit";
import { retrieveBugs } from "../../controllers/ticketController";

const slice = createSlice({
  name: "ticketSlice",
  initialState: [],
  reducers: {
    getBugs(state) {
      return retrieveBugs();
    },
    createBug(state, action) {},
    updateBug(state, action) {},
    markComplete(state, action) {},
  },
});

export default slice.reducer;
export const { getBugs, createBug, updateBug, markComplete } = slice.actions;
