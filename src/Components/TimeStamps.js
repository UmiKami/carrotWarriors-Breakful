import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dashboardActions } from "../store/dashboard";
import { calendarActions } from "../store/calendar";
import { Alert } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";

const TimeStamps = () => {
  const dispatch = useDispatch();
  const isTimeSelected = useSelector(state => state.calendar.selectedTime)
  const dateSelected = useSelector(state => state.calendar.selectedDate)
  const isDateSelected = Object.keys(dateSelected).length > 0;
  const throwAlert = useSelector((state) => state.dashboard.throwAlert);

  console.log(isDateSelected);
  const confirmDateTime = () => {
    if(isTimeSelected.length > 0 && isDateSelected){
      dispatch(dashboardActions.setThrowAlert(false))
      dispatch(dashboardActions.setDateTimeConfirmed(true));
    }else{
      dispatch(dashboardActions.setThrowAlert(true))
    }
  }

  // pass the time in 24h format 
  const selectedTime = (time) =>{
    dispatch(calendarActions.setSelectedTime(time))
  }


  return (
      <>
          <div className="timeSlots">
              <h1 className="dateTime-header">Time</h1>
              <div className="timeSlots__buttons">
                  <button onClick={() => selectedTime("00:00")}>0:00 AM</button>
                  <button onClick={() => selectedTime("00:30")}>0:30 AM</button>
                  <button onClick={() => selectedTime("01:00")}>1:00 AM</button>
                  <button onClick={() => selectedTime("01:30")}>1:30 AM</button>
                  <button onClick={() => selectedTime("02:00")}>2:00 AM</button>
                  <button onClick={() => selectedTime("02:30")}>2:30 AM</button>
                  <button onClick={() => selectedTime("03:00")}>3:00 AM</button>
                  <button onClick={() => selectedTime("03:30")}>3:30 AM</button>
                  <button onClick={() => selectedTime("04:00")}>4:00 AM</button>
                  <button onClick={() => selectedTime("04:30")}>4:30 AM</button>
                  <button onClick={() => selectedTime("05:00")}>5:00 AM</button>
                  <button onClick={() => selectedTime("05:30")}>5:30 AM</button>
                  <button onClick={() => selectedTime("06:00")}>6:00 AM</button>
                  <button onClick={() => selectedTime("06:30")}>6:30 AM</button>
                  <button onClick={() => selectedTime("07:00")}>7:00 AM</button>
                  <button onClick={() => selectedTime("07:30")}>7:30 AM</button>
                  <button onClick={() => selectedTime("08:00")}>8:00 AM</button>
                  <button onClick={() => selectedTime("08:30")}>8:30 AM</button>
                  <button onClick={() => selectedTime("09:00")}>9:00 AM</button>
                  <button onClick={() => selectedTime("09:30")}>9:30 AM</button>
                  <button onClick={() => selectedTime("10:00")}>10:00 AM</button>
                  <button onClick={() => selectedTime("10:30")}>10:30 AM</button>
                  <button onClick={() => selectedTime("11:00")}>11:00 AM</button>
                  <button onClick={() => selectedTime("11:30")}>11:30 AM</button>
                  <button onClick={() => selectedTime("12:00")}>12:00 PM</button>
                  <button onClick={() => selectedTime("12:30")}>12:30 PM</button>
                  <button onClick={() => selectedTime("13:00")}>1:00 PM</button>
                  <button onClick={() => selectedTime("13:30")}>1:30 PM</button>
                  <button onClick={() => selectedTime("14:00")}>2:00 PM</button>
                  <button onClick={() => selectedTime("14:30")}>2:30 PM</button>
                  <button onClick={() => selectedTime("15:00")}>3:00 PM</button>
                  <button onClick={() => selectedTime("15:30")}>3:30 PM</button>
                  <button onClick={() => selectedTime("16:00")}>4:00 PM</button>
                  <button onClick={() => selectedTime("16:30")}>4:30 PM</button>
                  <button onClick={() => selectedTime("17:00")}>5:00 PM</button>
                  <button onClick={() => selectedTime("17:30")}>5:30 PM</button>
                  <button onClick={() => selectedTime("18:00")}>6:00 PM</button>
                  <button onClick={() => selectedTime("18:30")}>6:30 PM</button>
                  <button onClick={() => selectedTime("19:00")}>7:00 PM</button>
                  <button onClick={() => selectedTime("19:30")}>7:30 PM</button>
                  <button onClick={() => selectedTime("20:00")}>8:00 PM</button>
                  <button onClick={() => selectedTime("20:30")}>8:30 PM</button>
                  <button onClick={() => selectedTime("21:00")}>9:00 PM</button>
                  <button onClick={() => selectedTime("21:30")}>9:30 PM</button>
                  <button onClick={() => selectedTime("22:00")}>
                      10:00 PM
                  </button>
                  <button onClick={() => selectedTime("22:30")}>
                      10:30 PM
                  </button>
                  <button onClick={() => selectedTime("23:00")}>
                      11:00 PM
                  </button>
                  <button onClick={() => selectedTime("23:30")}>
                      11:30 PM
                  </button>
              </div>
              <button className="confirm" onClick={confirmDateTime}>
                  Confirm
              </button>
              {throwAlert ? (
                  <Alert
                      variant="standard"
                      severity="error"
                      sx={{
                          color: "#5E5E5E",
                          fontWeight: "bold",
                          fontFamily: "Inter",
                          background: "transparent",
                          position: "absolute",
                          width: "435px",
                          left: "-150px",
                      }}
                      iconMapping={{
                        error: <ErrorOutline sx={{
                          color: "#5E5E5E" 
                        }}/>
                      }}
                  >
                      You must choose a date and time to continue
                  </Alert>
              ) : (
                  <></>
              )}
          </div>
      </>
  );
};

export default TimeStamps;
