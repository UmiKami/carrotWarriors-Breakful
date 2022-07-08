import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "time",
  initialState: {
    breakData: {
        date: null,
        timeStart: null,
        duration: null,
        type: null
    },
    breaksList: [] 
  },
  reducers: {
    setBreakData(state, action) {
      state.breakData = action.payload;
    },
    addToBreakList(state){
        let isNull = false;
        for (let prop in state.breakData){
            if(state.breakData[prop] == null){
                isNull = true;
            }
        }

        if(!isNull){
            state.breaksList.push(state.breakData);
        }

    }
  },
});

export const calendarActions = calendarSlice.actions;
export default calendarSlice;
