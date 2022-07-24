import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import calendarSlice from "./calendar";
import dashboardSlice from "./dashboard";
import breakSlice from "./break";
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    calendar: calendarSlice.reducer,
    break: breakSlice.reducer,
    dashboard: dashboardSlice.reducer,
  }
});
export default store;