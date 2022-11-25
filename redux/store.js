import { configureStore } from "@reduxjs/toolkit";
import { authReducer, bugReducer, userReducer, viewReducer } from "./features";

const store = configureStore({
  reducer: {
    authReducer,
    bugReducer,
    userReducer,
    viewReducer,
  },
});

export default store;
