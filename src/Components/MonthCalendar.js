import { LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";
import { useDispatch } from "react-redux";
import calendarAc

const MonthCalendar = () => {
  const [calendarVal, setCalendarVal] = useState({});
  const dispatch = useDispatch();
	dispatch(calend)

  return (
    <>
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
