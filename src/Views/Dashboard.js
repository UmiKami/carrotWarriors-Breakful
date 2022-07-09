import MonthCalendar from "../Components/MonthCalendar";
import EventCalendar from "../Components/EventCalendar";
import { useSelector } from "react-redux";

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
		          <MonthCalendar/>
              <EventCalendar/>
            </div>
          </>
      ) : (<h1>You are not logged in</h1>)
    }
    
    </>
  );
};

export default Dashboard;
