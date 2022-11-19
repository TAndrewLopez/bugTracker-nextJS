import { createSlice } from "@reduxjs/toolkit";
import { retrieveBugs } from "../../controllers/bugController";

const slice = createSlice({
  name: "bugSlice",
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
