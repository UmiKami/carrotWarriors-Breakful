import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { calendarActions } from "../store/calendar";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { createTheme } from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles"
import DateFnsUtils from "@date-io/date-fns";

const calendarTheme = createTheme({

    palette: {
        primary: {
            main: "#629EA0",
        },
    },

    overrides: {
        MuiPickersDay: {
            day: {
                color: "#436E70",
            },
            daySelected: {
                backgroundColor: "#436E70",
            },
            dayDisabled: {
                color: "#436E70",
            },
            current: {
                color: "#436E70",
            },
        },
    },
});

const MonthCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const dispatch = useDispatch();

    useEffect(() => {
        listEvents(new Date());

                dispatch(
                    calendarActions.setSelectedDate({
                        day: {
                            date: selectedDate.getDate(),
                            dayNum: selectedDate.getDay(),
                        },
                        month: selectedDate.getMonth(),
                        year: selectedDate.getFullYear(),
                    })
                );
    })

    const handleDateChange = (date) => listEvents(date);

    const listEvents = (date) => {
        requestGoogleCalendarApi('/calendars/primary/events',
        {
            maxResults: 50,
            orderBy: 'startTime',
            showDeleted: false,
            timeMin: new Date(date.setHours(0, 0, 0, 0)).toISOString(),
            timeMax: new Date(date.setHours(23,59,59,999)).toISOString(),
            singleEvents: true //to expand recurrent events
        });
    }

    //transform an Object in a URL query string. ?key=value&key2=value2
    const objectToQueryString = (obj) => {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }

    const buildAuthorizationHeaders = () => {
        return {
            "Authorization": `Bearer ${localStorage.getItem('access_token')}`
        }
    }

    const requestGoogleCalendarApi = (url, params) => {
        //example: https://www.googleapis.com/calendar/v3/calendars/calendarId/events?maxResults=20&orderBy=startTime...
        const googleCalendarEndpoint = 'https://www.googleapis.com/calendar/v3';
        if(params !== undefined) {
            url += `?${objectToQueryString(params)}`;
        }
    
        const fullUrl = `${googleCalendarEndpoint}${url}`
        
        fetch(fullUrl, {
            headers: buildAuthorizationHeaders()
        })
        .then(response => response.json())
        .then(json => {
            dispatch(calendarActions.setEvents(json.items));
            console.log("API resp: ", json)
        });
    }

    return (
        <div className="d-flex flex-column">
            <h1 className="dateTime-header mt-4">Date</h1>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={calendarTheme}>
                <DatePicker 
                    value={selectedDate} 
                    onChange={setSelectedDate}
                    disablePast
                    variant="static" 
                    disableToolbar/>
                </ThemeProvider>
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default MonthCalendar;
