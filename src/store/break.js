import { createSlice } from "@reduxjs/toolkit";

const breakSlice = createSlice({
    name: "break",
    initialState: {
        breakType: "",
        breakDuration: "",
        isBreakTime: false,
    },
    reducers: {
        setBreakType(state, {payload}){
            state.breakType = payload;
        },
        setBreakDuration(state, {payload}){
            state.breakDuration = payload;
        },
        setIsBreakTime(state, {payload}){
            state.isBreakTime = payload;
        }
    },
});

export const breakActions = breakSlice.actions;
export default breakSlice;
