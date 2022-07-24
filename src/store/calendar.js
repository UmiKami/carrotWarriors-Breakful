import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    selectedDate: {},
    events: []
  },
  reducers: {
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },

    setEvents(state, events) {
      debugger;
      state.events = events
    }
  },
});

export const calendarActions = calendarSlice.actions;
export default calendarSlice;
