import React, { Component }  from 'react';
import MonthCalendar from "../Components/MonthCalendar";
import { useSelector } from "react-redux";
import NavBar from "../Components/NavBar";
import TimeStamps from "../Components/TimeStamps";

const Dashboard = () => {
  const selectedDate = useSelector((state) => state.calendar.selectedDate);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  console.log(selectedDate);

  return (
    <>
<<<<<<< HEAD
      <main id="content-wrapper">

        <NavBar />
        <p>Choose the time to take breaks!</p>
        {/* <MonthCalendar />
        <TimeStamps /> */}

      </main>
      
=======
    {
      isLoggedIn ? (
          <>
            <h1>You are in the dashboard!!</h1>
            <div className="calendar-wrapper">
		          <MonthCalendar/>
            </div>
          </>
      ) : (<h1>You are not logged in</h1>)
    }
    
>>>>>>> b2ff0ce9e7b204f3eedd10048027950b371945e2
    </>
  );
};

export default Dashboard;
