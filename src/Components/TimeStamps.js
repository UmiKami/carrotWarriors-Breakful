import React from "react";
import { useDispatch } from "react-redux";
import { dashboardActions } from "../store/dashboard";

const TimeStamps = () => {
  const dispatch = useDispatch();

  const confirmDateTime = () => {
    dispatch(dashboardActions.setDateTimeConfirmed(true))
  }

  return (
    <>
      <div className="timeSlots">
        <h1 className="dateTime-header">Time</h1>
        <div className="timeSlots__buttons">
          <button>8:00 AM</button>
          <button>8:30 AM</button>
          <button>10:00 AM</button>
          <button>12:00 PM</button>
          <button>12:30 PM</button>
          <button>1:00 PM</button>
          <button>3:00 PM</button>
          <button>3:30 PM</button>
          <button>4:00 PM</button>
          <button>4:30 PM</button>
          <button>6:30 PM</button>
          <button>8:00 PM</button>
          <button>9:30 PM</button>
          <button>10:30 PM</button>
        </div>
        <button className="confirm" onClick={confirmDateTime}>Confirm</button>
      </div>
    </>
  );
};

export default TimeStamps;
