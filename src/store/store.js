import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import calendarSlice from "./calendar";
import dashboardSlice from "./dashboard";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    calendar: calendarSlice.reducer,
    dashboard: dashboardSlice.reducer,
  }
});
export default store;