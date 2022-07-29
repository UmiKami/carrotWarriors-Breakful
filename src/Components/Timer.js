import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faGear } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { breakActions } from "../store/break";

const Timer = ({ nextBreak }) => {
    const dispatch = useDispatch()

    let dateGoal;
    let startDate;
    const [hasExecute, setHasExecute] = useState(false);

    const navigate = useNavigate();
    // use this states to update timer
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    const fixRenderFormat = (time) => {
        return time < 10 ? "0" + time : time;
    };

    if (nextBreak && !hasExecute) {
        dateGoal = new Date(nextBreak);
        startDate = new Date();
        // getTime methodn returns differnce in milliseconds hence why we are converting to hours by / 3600000
        let timeDifference = (dateGoal.getTime() - startDate.getTime()) / 3600000;
        let hours = parseInt(timeDifference);
        let minutes = parseInt(timeDifference * 60 - hours * 60)
        let seconds = Math.round((timeDifference * 60 - hours * 60) % minutes * 60);

        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
        
        //----- testing only ------
        // setHours(0);
        // setMinutes(0);
        // setSeconds(10);
        //----- testing only ------
        setHasExecute(true);
    }

    useEffect(() => {
        const timerInter = setInterval(() => {
            if (seconds == 0 && minutes == 0 && hours == 0) {
                dispatch(breakActions.setIsBreakTime(true))
                return;
            }

            if (seconds > 0) {
                setSeconds((prevState) => prevState - 1);
            } else {
                if (minutes === 0 && seconds === 0) {
                    setHours((prevState) => prevState - 1);
                    // reset mins and secs to 59 since we are in a new hour
                    setMinutes(59);
                    setSeconds(59);
                } else {
                    // as long as minutes are not 0, if seconds reach 0 we reset seconds and subtract 1 from minutes
                    setMinutes((prevState) => prevState - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        // clears interval to prevent it from acting irratically
        return () => clearInterval(timerInter);
    }, [seconds, minutes, hours]);

    const skipEvent = () => {

    }

    return (
        <Container className="timerCard">
            <Row className="d-flex align-items-center">
                <Col className="d-flex align-items-center">
                    <img
                        src={require("../assets/icon_1.png")}
                        alt="breakful icon"
                        width="80px"
                    />
                    <p className="timerCard__header1">Breakful</p>
                </Col>
                <Col className="d-flex justify-content-end"></Col>
            </Row>
            <Row className="d-flex justify-content-center ">
                <Col xs={11} className="px-0">
                    <div
                        style={{
                            backgroundColor: "#E5F5F5",
                            color: "#436E70",
                            fontFamily: "Inter",
                            borderRadius: "8px",
                        }}
                        className="d-flex flex-column align-items-center justify-content-center py-4"
                    >
                        <p style={{ fontSize: "22px", margin: 0 }}>
                            Next break in:
                        </p>
                        <p
                            className="m-0"
                            style={{
                                fontSize: "28px",
                                fontWeight: "700",
                                letterSpacing: "3px",
                            }}
                        >
                            {fixRenderFormat(hours)}h :{" "}
                            {fixRenderFormat(minutes)}m :{" "}
                            {fixRenderFormat(seconds)}s
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center flex-grow-1">
                <Col></Col>
                <Col
                    xs={10}
                    className="d-flex justify-content-center align-items-center position-relative"
                >
                    <Button
                        variant="outline-success"
                        className="timerCard__skipBtn"
                        onClick={()=>skipEvent()}
                    >
                        Skip this break
                    </Button>
                    <FontAwesomeIcon
                        icon={faGear}
                        style={{
                            fontSize: "44px",
                            position: "absolute",
                            right: "-10px",
                            color: "#436E70",
                        }}
                        className="timerCard__awesomeBtn timerCard__awesomeBtn-wheel"
                        onClick={() => navigate("/dashboard")}
                    />
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default Timer;
