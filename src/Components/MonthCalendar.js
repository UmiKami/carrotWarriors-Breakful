import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { calendarActions } from "../store/calendar";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles"
import DateFnsUtils from "@date-io/date-fns";

const calendarTheme = createMuiTheme({
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
    const [calendarVal] = useState({});
    const [selectedDate] = useState(new Date());
    const dispatch = useDispatch();
    dispatch(calendarActions.setSelectedDate(calendarVal))

    useEffect(() => {
        listEvents();
    })

    const handleDateChange = (date) => {
        console.log(date);
    }

    const listEvents = () => requestGoogleCalendarApi('/calendars/primary/events',
    {
        maxResults: 20,
        orderBy: 'startTime',
        showDeleted: false,
        timeMin: new Date().toISOString(),
        singleEvents: true //to expand recurrent events
    });

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
        .then(json => console.log(json));
    }

    return (
        <div className="d-flex flex-column">
            <h1 className="dateTime-header mt-4">Date</h1>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={calendarTheme}>
                <DatePicker 
                    value={selectedDate} 
                    onChange={handleDateChange}
                    disablePast
                    variant="static" 
                    disableToolbar/>
                </ThemeProvider>
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default MonthCalendar;
