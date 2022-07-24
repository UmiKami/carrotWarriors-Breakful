import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calendarActions } from "../store/calendar";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import DateFnsUtils from "@date-io/date-fns";

const calendarTheme = createMuiTheme({
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
    const [selectedDate, handleDateChange] = useState(new Date());
    const dispatch = useDispatch();
    useEffect(() => {
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
    }, [selectedDate]);

    const myCurrentDate = useSelector((state) => state.calendar.selectedDate);
    console.log("Calendar: ", myCurrentDate);

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
                        disableToolbar
                    />
                </ThemeProvider>
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default MonthCalendar;
