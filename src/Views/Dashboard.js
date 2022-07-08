import MonthCalendar from "../Components/MonthCalendar";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const selectedDate = useSelector((state) => state.calendar.selectedDate);
  console.log(selectedDate);

  return (
    <>
      <h1>You are in the dashboard!!</h1>
			<MonthCalendar/>
    </>
  );
};

export default Dashboard;
