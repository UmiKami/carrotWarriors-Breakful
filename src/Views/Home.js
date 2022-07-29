import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Timer from "../Components/Timer";
import { useDispatch, useSelector } from "react-redux";
import { getCalendarEvents, googleActions } from "../store/google";
import Break from "../Components/Break"

const Home = () => {
    const dispatch = useDispatch();
    const isBreakTime = useSelector(state=>state.break.isBreakTime)
    const events = useSelector((state) => state.google.events);
    const eventsStatus = useSelector((state) => state.google.status);
    let breakfulEvents = [];
    let nextBreakStartTime;
    const today = new Date();

    if (eventsStatus == "success") {
        breakfulEvents = events.filter((item) =>
            item.summary.includes("Breakful")
        );

        nextBreakStartTime = breakfulEvents[0].start.dateTime;
    }

    useEffect(() => {
        listEvents(today);
        dispatch(
            googleActions.setHeader({
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            })
        );
        dispatch(getCalendarEvents());
    }, []);

    const listEvents = (date) => {
        formatUrl("/calendars/primary/events", {
            maxResults: 50,
            orderBy: "startTime",
            showDeleted: false,
            timeMin: new Date(date.setHours(0, 0, 0, 0)).toISOString(),
            timeMax: new Date(date.setHours(23, 59, 59, 999)).toISOString(),
            singleEvents: true, //to expand recurrent events
        });
    };

    const formatUrl = (url, params) => {
        const googleCalendarEndpoint = "https://www.googleapis.com/calendar/v3";
        if (params !== undefined) {
            url += `?${objectToQueryString(params)}`;
        }

        const fullUrl = `${googleCalendarEndpoint}${url}`;
        dispatch(googleActions.setUrl(fullUrl));
    };

    //transform an Object in a URL query string. ?key=value&key2=value2
    const objectToQueryString = (obj) => {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(
                encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
            );
        }
        return keyValuePairs.join("&");
    };
    return (
        <Container
            style={{ height: "100vh" }}
            className="d-flex align-items-center justify-content-center"
        >
            <Row>
                <Col style={{ position: "relative" }}>
                    <div
                        style={{
                            position: "absolute",
                            width: "483px",
                            height: "483px",
                            background: "rgba(127, 203, 206, 0.2)",
                            borderRadius: "1000px",
                            right: "-70px",
                            top: "-75px",
                            zIndex: "-9999",
                        }}
                    ></div>
                    <img
                        src={require("../assets/LPimage.png")}
                        alt="Close up of a girl taking a relaxing break."
                        width="552px"
                    />
                </Col>
                <Col>
                    {/* Use ternary operator to change to break timer if it is time to take a break */}
                   {!isBreakTime ? <Timer nextBreak={nextBreakStartTime}/> : <Break/>}
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
