import React from "react";
import Nav from "../Components/Navbar";
import SubNavbar from "../Components/SubNavbar";
import MonthCalendar from "../Components/MonthCalendar";
import { useDispatch, useSelector } from "react-redux";
import TimeStamps from "../Components/TimeStamps";
import EventCalendar from "../Components/EventCalendar";
import BreakOptions from "../Components/BreakOptions";
import BreakReview from "../Components/BreakReview";
import { Link } from "react-router-dom";

const Dashboard = () => {
    // for alert
	const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const isDateTimeConfirmed = useSelector(
        (state) => state.dashboard.isDateTimeConfirmed
    );
    const isTypeDurationConfirmed = useSelector(
        (state) => state.dashboard.isTypeDurationConfirmed
    );
    const throwAlert = useSelector(
        (state) => state.dashboard.throwAlert
    )

    return (
        <>
            {isLoggedIn ? (
                <>
                    <Nav />
                    <div className="d-flex justify-content-center">
                        <SubNavbar />
                    </div>
                    <div className="calendar-wrapper">
                        <div className="dashboardRow d-flex justify-content-center">
                            {!isDateTimeConfirmed ? (
                                <>
                                    <MonthCalendar />
                                    <TimeStamps />
                                </>
                            ) : !isTypeDurationConfirmed ? (
                                <BreakOptions />
                            ) : (
                                <BreakReview />
                            )}
                            <EventCalendar />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <h1>You are not logged in</h1>
                    <Link to="/">Go home</Link>
                </>
            )}
        </>
    );
};

export default Dashboard;
