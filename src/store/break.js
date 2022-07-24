import { createSlice } from "@reduxjs/toolkit";

const breakSlice = createSlice({
    name: "break",
    initialState: {
        breakType: "",
        breakDuration: "",
    },
    reducers: {
        
    },
});

export const breakActions = breakSlice.actions;
export default breakSlice;
