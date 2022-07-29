import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { useDispatch } from "react-redux";

export const getCalendarEvents = createAsyncThunk(
    "events/getEvents",
    async (arg,{getState}) => {
        const state = getState();
        return await fetch(state.google.url, {
            headers: state.google.fetchHeader,
        })
        .then(resp => {
            return resp.json()
        })
    }
)

const googleSlice = createSlice({
    name: "google",
    initialState:{
        events: {},
        status: null,
        url: "",
        fetchHeader: {},
    },
    reducers:{
        setUrl(state, {payload}){
            state.url = payload;
        },
        setHeader(state, {payload}){
            state.fetchHeader = payload;
        }
    },
    extraReducers: {
        [getCalendarEvents.pending]: (state, action) => {
            state.status = "loading"
        },
        [getCalendarEvents.fulfilled]: (state, action) => {
            state.status = "success"
            state.events = action.payload.items
        },
        [getCalendarEvents.rejected]: (state, action) => {
            state.status = "error"
        }
    }
})
export const googleActions = googleSlice.actions
export default googleSlice