import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    selectedDate: {},
    events: [],
    selectedTime: ""
  },
  reducers: {
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
    setEvents(state, events) {
      state.events = events
    },
    setSelectedTime(state, action){
      state.selectedTime = action.payload;
    }
  },
});

export const calendarActions = calendarSlice.actions;
export default calendarSlice;
