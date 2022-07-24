import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        signIn(state){
            state.isLoggedIn = true;
        },
        
        signOut(state){
            state.isLoggedIn = false;
        },
    }
})

export const authActions = authSlice.actions;
export default authSlice;