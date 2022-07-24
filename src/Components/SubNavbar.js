import React from "react";

const SubNavbar = () => {
    const currentDate = new Date();
    const dayNames = {
        0: "SUN",
        1: "MON",
        2: "TUE",
        3: "WED",
        4: "THU",
        5: "FRI",
        6: "SAT",
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

    return (
        <section className="subNav">
            <h5>Schedule Breaks</h5>
            <div className="eventCalendarNav">
                <h5>{dayNames[currentDate.getDay()]}, {monthNames[currentDate.getUTCMonth()]} {currentDate.getDate()}, {currentDate.getFullYear()}</h5>
                <div className="eventCalendarNav__navArrows">
                    <span className="eventCalendarNav__navArrows-left">
                        {" "}
                        ᐸ{" "}
                    </span>
                    <span className="eventCalendarNav__navArrows-right">
                        {" "}
                        ᐳ{" "}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default SubNavbar;
