import React, { useEffect } from 'react';
import MonthCalendar from "../Components/MonthCalendar";
import { useSelector } from "react-redux";
import TimeStamps from "../Components/TimeStamps";
import EventCalendar from '../Components/EventCalendar';
import BreakOptions from '../Components/BreakOptions';
import BreakReview from '../Components/BreakReview';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';


const Dashboard = () => {
  // const selectedDate = useSelector((state) => state.calendar.selectedDate);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isDateTimeConfirmed = useSelector(state=> state.dashboard.isDateTimeConfirmed);
  const isTypeDurationConfirmed = useSelector(state=>state.dashboard.isTypeDurationConfirmed);
  //const totalHours = Array.from(Array(24).keys());
  const totalHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('access_token') === undefined || localStorage.getItem('access_token') === null) {
      dispatch(authActions.signOut())
    } else {
      dispatch(authActions.signIn())
    }
  });

  return (
    <>
    {
      isLoggedIn ? (
          <>

            <div className="calendar-wrapper">

              <div className='dashboardRow'>
                
                {
                  !isDateTimeConfirmed ? (
                    <>
                      <MonthCalendar/>
                      <TimeStamps />
                    </>
                  ) : !isTypeDurationConfirmed ? (
                    <BreakOptions />
                  ) : (
                    <BreakReview/>
                  )
                }

                <div className="eventCal">
                  {totalHours.map((hour) => <EventCalendar rowHour={hour}/>)}
                </div>
              </div>

            </div>
          </>
      ) : (<>
            <h1>You are not logged in</h1>
            <Link to="/">Go home</Link>
          </>
      )
    }

    
    
    </>
  );
};

export default Dashboard;
