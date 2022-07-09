import React, { Component }  from 'react';
import MonthCalendar from "../Components/MonthCalendar";
import { useSelector } from "react-redux";
import NavBar from "../Components/NavBar";
import TimeStamps from "../Components/TimeStamps";

const Dashboard = () => {
  const selectedDate = useSelector((state) => state.calendar.selectedDate);
  console.log(selectedDate);

  return (
    <>
      <main id="content-wrapper">

        <NavBar />
        <p>Choose the time to take breaks!</p>
        {/* <MonthCalendar />
        <TimeStamps /> */}

      </main>
      
    </>
  );
};

export default Dashboard;
