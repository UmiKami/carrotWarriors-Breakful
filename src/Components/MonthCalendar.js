import React, { Component }  from 'react';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { calendarActions } from "../store/calendar";

const MonthCalendar = () => {
  const [calendarVal, setCalendarVal] = useState({});
  const dispatch = useDispatch();
	dispatch(calendarActions.setSelectedDate(calendarVal))

  return (
    <>
      <h1>Date</h1>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Breaks Calendar"
          value={calendarVal}
          onChange={(val) => {
            setCalendarVal(val);
          }}
          disablePast={true}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

export default MonthCalendar;
