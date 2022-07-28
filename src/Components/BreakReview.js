import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { calendarActions } from "../store/calendar";
import { dashboardActions } from "../store/dashboard";

const BreakReview = () => {
    const navigate = useNavigate();

    const calcEndTime = () => {
        const duration = useSelector((state) => state.break.breakDuration);
        let endTime = "";

        if (
            parseInt(startTime.slice(-2)) === 30 &&
            parseInt(duration.slice(0, 2)) === 30
        ) {
            endTime = (parseInt(startTime.slice(-2)) + 1).toString() + ": 00";
        } else {
            endTime =
                startTime.slice(0, 2) +
                ":" +
                (
                    parseInt(startTime.slice(-2)) +
                    parseInt(duration.slice(0, 2))
                ).toString();
        }

        return endTime;
    };

    const monthNames = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
    };

    const calendar = useSelector((state) => state.calendar.selectedDate);
    const startTime = useSelector((state) => state.calendar.selectedTime);

    const formattedTime = (time) => {
        // 10:05
        const resultTime =
            parseInt(time.slice(0, 2)) >= 12
                ? (parseInt(time.slice(0, 2)) !== 12
                    ? parseInt(time.slice(0, 2)) - 12
                    : parseInt(time.slice(0, 2))
                ).toString() +
                time.slice(-3) +
                " PM"
                : time + " AM";

        return resultTime;
    };

    const breakType = useSelector((state) => state.break.breakType);
    const month = monthNames[calendar.month];
    const day = calendar.day.date;
    const year = calendar.year;
    const startingTime = formattedTime(startTime);
    const endTime = formattedTime(calcEndTime());

    const dispatch = useDispatch();

    const createAnotherBreak = () => {
        // reset everything
        dispatch(dashboardActions.setTypeDurationConfirmed(false));
        dispatch(dashboardActions.setDateTimeConfirmed(false));
        dispatch(calendarActions.setSelectedDate({}));
        dispatch(calendarActions.setSelectedTime(""));
    };

    return (
        <section className="breakRev">
            <div className="breakRev__heroSection">
                <div style={{ textAlign: "center" }}>
                    <p className="breakRev__heroSection-header">
                        Great! You are taking a{" "}
                        <span className="breakRev__heroSection-specialHeader">
                            {breakType.toUpperCase()} TIME
                        </span>{" "}
                        at
                    </p>
                    <p className="breakRev__heroSection-specialHeader">
                        {month} {day}, {year} {startingTime}-{endTime}
                    </p>
                </div>

                <img
                    src={require("../assets/ConfirmationImg.svg")}
                    alt="person stretching"
                    className="breakRev__heroSection-img"
                />
                <div className="breakRev__actionBtn">
                    <button className="btn breakRev__actionBtn-returnBtn">
                        Return
                    </button>
                    <button
                        className="btn breakRev__actionBtn-promptBtn"
                        onClick={createAnotherBreak}
                    >
                        Add another break
                    </button>
                </div>
            </div>
            <div className="breakRev__goHome">
                <div>
                    <p className="breakRev__goHome-header">
                        Done scheduling breaks?
                    </p>
                    <p className="breakRev__goHome-text">
                        You could start working
                    </p>
                    <p className="breakRev__goHome-text">
                        we will notify you when to break~
                    </p>
                </div>
                <button className="btn breakRev__goHome-homeBtn" onClick={()=>navigate('/home')}>
                    Yes, I am done!
                </button>
            </div>
        </section>
    );
};

export default BreakReview;
