import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    selectedDate: {}
  },
  reducers: {
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
  },
});

export const calendarActions = calendarSlice.actions;
export default calendarSlice;
