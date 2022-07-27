import { createSlice } from "@reduxjs/toolkit";

const breakSlice = createSlice({
    name: "break",
    initialState: {
        breakType: "",
        breakDuration: "",
    },
    reducers: {
        setBreakType(state, {payload}){
            state.breakType = payload;
        },
        setBreakDuration(state, {payload}){
            state.breakDuration = payload;
        },
    },
});

export const breakActions = breakSlice.actions;
export default breakSlice;
