import { LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { StaticDatePicker } from "@mui/x-date-pickers";
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
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          label="Date"
          showToolbar={false}
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
