import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { breakActions } from "../store/break";
import { dashboardActions } from "../store/dashboard";

const BreakOptions = () => {
    const dispatch = useDispatch("");
    const [customType, setCustomType] = useState()

    const returnToDateTime = () => {
        dispatch(dashboardActions.setDateTimeConfirmed(false))
    }

    const selectedTime = useSelector(state=>state.calendar.selectedTime)
    const selectedDate = useSelector((state) => state.calendar.selectedDate);
    const breakType = useSelector((state) => state.break.breakType);
    const duration = useSelector((state) => state.break.breakDuration);

    const createEvent = () => {
        const startDate = new Date(selectedDate.year, selectedDate.month, selectedDate.day.date).toLocaleDateString('en-CA')

        requestGoogleCalendarApi('/calendars/primary/events',
        {
            start: {
                dateTime: `${startDate}T${selectedTime}:00`,
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
            },
            end: {
                dateTime: `${startDate}T${calcEndTime()}:00`,
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
            },
            summary: "Breakful: " + breakType

        });
    }

    const buildAuthorizationHeaders = () => {
        return {
            "Authorization": `Bearer ${localStorage.getItem('access_token')}`
        }
    }

    // TODO: remember to reuse the function
    const requestGoogleCalendarApi = (url, body) => {
        const googleCalendarEndpoint = 'https://www.googleapis.com/calendar/v3';
    
        const fullUrl = `${googleCalendarEndpoint}${url}`
        
        fetch(fullUrl, {
            method: 'POST',
            headers: buildAuthorizationHeaders(),
            body: JSON.stringify(body)
        })
        .then(response => response.json())
    }

    // TODO: remember to reuse the function
    const calcEndTime = () => {
        let endTime = "";

        if (
            parseInt(selectedTime.slice(-2)) === 30 &&
            parseInt(duration.slice(0, 2)) === 30
        ) {
            endTime = (parseInt(selectedTime.slice(-2)) + 1).toString() + ": 00";
        } else {
            endTime =
                selectedTime.slice(0, 2) +
                ":" +
                (
                    parseInt(selectedTime.slice(-2)) +
                    parseInt(duration.slice(0, 2))
                ).toString();
        }

        return endTime;
    };

    const confirmBreak = () => {
        // create event on google calendar
        createEvent();


        dispatch(dashboardActions.setTypeDurationConfirmed(true))
    }


    // converts 24 hour format to 12 hour format
    const formattedTime =
        // 10:05
        parseInt(selectedTime.slice(0, 2)) >= 12
            ? (parseInt(selectedTime.slice(0, 2)) !== 12
                ? parseInt(selectedTime.slice(0, 2)) - 12
                : parseInt(selectedTime.slice(0, 2))
            ).toString() +
            selectedTime.slice(-3) +
            " PM"
            : selectedTime + " AM";

    const setType = (type) => {
        dispatch(breakActions.setBreakType(type))
    }
    const setTime = (time) => {
        dispatch(breakActions.setBreakDuration(time))
    }

    return (
        <section className="breakOpt">
            <div className="breakOpt__typeDuration">
                <h1 className="breakOpt__header">
                    You are scheduling a break at {formattedTime} !
                </h1>
                {/* Type */}
                <div className="breakOpt__wrapper">
                    <div className="breakOpt__typeDuration-type">
                        <h1 className="breakOpt__typeDuration-typeHeader">
                            What would you like to do during your break?
                        </h1>
                        <button
                            className="breakOpt__typeDuration-typeBtn"
                            onClick={() => setType("Water")}
                        >
                            Water time
                        </button>
                        <button
                            className="breakOpt__typeDuration-typeBtn"
                            onClick={() => setType("Coffee")}
                        >
                            Coffee Time
                        </button>
                        <button
                            className="breakOpt__typeDuration-typeBtn"
                            onClick={() => setType("Stretching")}
                        >
                            Stretching time
                        </button>
                        <button
                            className="breakOpt__typeDuration-typeBtn"
                            onClick={() => setType("Nap")}
                        >
                            Nap time
                        </button>
                        <button
                            className="breakOpt__typeDuration-typeBtn"
                            onClick={() => setType(customType)}
                        >
                            <span
                                className="breakOpt__typeDuration-customType"
                                contentEditable
                                onInput={(inpt) =>
                                    setCustomType(
                                        inpt.currentTarget.textContent
                                    )
                                }
                            >
                                Customize your break
                            </span>{" "}
                            time
                        </button>
                    </div>
                    {/* Time */}
                    <div className="breakOpt__typeDuration-time">
                        <h1 className="breakOpt__typeDuration-timeHeader">
                            How long would you like to take a break?
                        </h1>
                        <button className="breakOpt__typeDuration-timeBtn" onClick={()=>setTime("5 mins")}>
                            5 mins
                        </button>
                        <button className="breakOpt__typeDuration-timeBtn" onClick={()=>setTime("10 mins")}>
                            10 mins
                        </button>
                        <button className="breakOpt__typeDuration-timeBtn" onClick={()=>setTime("15 mins")}>
                            15 mins
                        </button>
                        <button className="breakOpt__typeDuration-timeBtn" onClick={()=>setTime("30 mins")}>
                            30 mins
                        </button>
                        <button className="breakOpt__typeDuration-timeBtn">
                            <span
                                contentEditable
                                className="breakOpt__typeDuration-customTime"
                            >_</span>{" "}
                            mins
                        </button>
                    </div>
                </div>

                <div className="breakOpt__actionBtn">
                    <button
                        className="breakOpt__returnBtn"
                        onClick={returnToDateTime}
                    >
                        Return
                    </button>
                    <button
                        className="breakOpt__confirmBtn"
                        onClick={confirmBreak}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BreakOptions;
