import React, { Component }  from 'react';
import MonthCalendar from "../Components/MonthCalendar";
import { useSelector } from "react-redux";
import TimeStamps from "../Components/TimeStamps";
import EventCalendar from '../Components/EventCalendar';


const Dashboard = () => {
  const selectedDate = useSelector((state) => state.calendar.selectedDate);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  console.log(selectedDate);

  return (
    <>
    {
      isLoggedIn ? (
          <>

            <div className="calendar-wrapper">

              <div className='dashboardRow'> 
              
                <MonthCalendar/>
                <TimeStamps />
                <EventCalendar/>
              </div>

            </div>
          </>
      ) : (<h1>You are not logged in</h1>)
    }

    
    
    </>
  );
};

export default Dashboard;
