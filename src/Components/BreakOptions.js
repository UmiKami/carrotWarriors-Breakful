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

    const confirmBreak = () => {
        // create event on google calendar


        dispatch(dashboardActions.setTypeDurationConfirmed(true))
    }

    const selectedTime = useSelector(state=>state.calendar.selectedTime)
    // converts 24 hour format to 12 hour format
    const formattedTime =
        // 10:05
        parseInt(selectedTime.slice(0, 2)) >= 12
            ? (parseInt(selectedTime.slice(0, 2)) != 12
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
                            ></span>{" "}
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
