import React from "react";
import { useDispatch } from "react-redux";
import { dashboardActions } from "../store/dashboard";

const BreakReview = () => {
    const breakType = "COFFEE BREAK";
    const month = "June";
    const day = 19;
    const year = 2022;
    const startingTime = "10";
    const endTime = "10:05";

    const dispatch = useDispatch();

    const morningOrAfternoon = () => {
        return "AM"
    }

    const createAnotherBreak = () => {
        dispatch(dashboardActions.setTypeDurationConfirmed(false))
        dispatch(dashboardActions.setDateTimeConfirmed(false))
    }

    return (
        <section className="breakRev">
            <div className="breakRev__heroSection">
                <div style={{ textAlign: "center" }}>
                    <p className="breakRev__heroSection-header">
                        Great! You are taking a{" "}
                        <span className="breakRev__heroSection-specialHeader">
                            {breakType}
                        </span>{" "}
                        at
                    </p>
                    <p className="breakRev__heroSection-specialHeader">
                        {month} {day}, {year} {startingTime}
                        {morningOrAfternoon()}-{endTime}
                        {morningOrAfternoon()}
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
                    <button className="btn breakRev__actionBtn-promptBtn" onClick={createAnotherBreak}>
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
                <button className="btn breakRev__goHome-homeBtn">
                    Yes, I am done!
                </button>
            </div>
        </section>
    );
}

export default BreakReview;