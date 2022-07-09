import React, { Component }  from 'react';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { calendarActions } from "../store/calendar";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      primary:'#436E70',
      secondary: '#B5BEC6',
      disabled: '#D0EDED'
    },
    primary: {
      main: '#436E70',
      light: '#629EA0'
    },
    action:{
      active: '#436E70',
      selected:'#436E70',
      focus: '#436E70'
    }
  },
  typography: {
    fontFamily: 'Inter',
    fontSize: 18,
    button:{
      fontWeight: "600 !important"
    }
  }
})

const MonthCalendar = () => {
  const [calendarVal, setCalendarVal] = useState({});
  const dispatch = useDispatch();
  dispatch(calendarActions.setSelectedDate(calendarVal))

  return (
    <>
      <h1>Date</h1>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <StaticDatePicker
            className="calendar"
            label="Date"
            showToolbar={false}
            value={calendarVal}
            onChange={(val) => {
              setCalendarVal(val);
            }}
            disablePast={true}
            disableMaskedInput={true}
            renderInput={(params) => <TextField {...params} />}
          />
        </ThemeProvider>
      </LocalizationProvider>
    </>
  );
};

export default MonthCalendar;
