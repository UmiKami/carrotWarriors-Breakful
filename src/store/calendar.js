import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    selectedDate: {},
    selectedTime: ""
  },
  reducers: {
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
    setSelectedTime(state, action){
      state.selectedTime = action.payload;
    }
  },
});

export const calendarActions = calendarSlice.actions;
export default calendarSlice;
