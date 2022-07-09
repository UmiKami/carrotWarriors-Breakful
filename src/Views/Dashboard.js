import MonthCalendar from "../Components/MonthCalendar";
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
            <h1>You are in the dashboard!!</h1>
            <div className="calendar-wrapper">
		          <MonthCalendar/>
            </div>
          </>
      ) : (<h1>You are not logged in</h1>)
    }
    
    </>
  );
};

export default Dashboard;
