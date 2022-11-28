import { configureStore } from "@reduxjs/toolkit";
import { authReducer, ticketReducer, viewReducer } from "./features";

const store = configureStore({
  reducer: {
    authReducer,
    ticketReducer,
    viewReducer,
  },
});

export default store;
