import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import calendarSlice from "./calendar";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    calendar: calendarSlice.reducer,
  }
});
export default store;