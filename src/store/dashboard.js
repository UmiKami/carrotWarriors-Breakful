import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        isDateTimeConfirmed: false,
        isTypeDurationConfirmed: false,
        throwAlert: false,
    },
    reducers: {
        setDateTimeConfirmed(state, action) {
            state.isDateTimeConfirmed = action.payload;
        },
        setTypeDurationConfirmed(state, action) {
            if (state.isDateTimeConfirmed) {
                state.isTypeDurationConfirmed = action.payload;
            }
        },
        setThrowAlert(state, action) {
			state.throwAlert = action.payload;
        },
    },
});

export const dashboardActions = dashboardSlice.actions;
export default dashboardSlice;
