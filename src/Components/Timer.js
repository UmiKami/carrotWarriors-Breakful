import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faGear } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
    // use this states to update timer
    const [hours, setHours] = useState(10);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(23);

    const fixRenderFormat = (time) => {
        return time < 10 ? "0" + time : time
    }

    useEffect(() => {
        const timerInter = setInterval(() => {
            if (seconds > 0) {
                setSeconds((prevState) => prevState - 1);
            } else {
                if (minutes == 0 && seconds == 0) {
                    setHours((prevState) => prevState - 1)
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
    }, [seconds]);

    return (
        <Container
            style={{
                position: "relative",
                background: "white",
                height: "383px",
                width: "633px",
                boxShadow: "0px 23px 30px rgba(0,0,0,0.25)",
                zIndex: "1000",
                display: "flex",
                flexDirection: "column",
            }}
            className="timerCard"
        >
            <Row className="d-flex align-items-center">
                <Col className="d-flex align-items-center">
                    <img
                        src={require("../assets/icon_1.png")}
                        alt="breakful icon"
                        width="80px"
                    />
                    <p
                        style={{
                            fontSize: "28px",
                            margin: "0",
                            color: "#436E70",
                            fontWeight: "medium",
                        }}
                    >
                        Breakful
                    </p>
                </Col>
                <Col className="d-flex justify-content-end">
                    <FontAwesomeIcon
                        icon={faXmark}
                        style={{
                            color: "#436E70",
                            fontSize: "24px",
                            marginRight: "12px",
                        }}
                    />
                </Col>
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
                        style={{
                            fontWeight: "light",
                            fontSize: "25px",
                            width: "338px",
                            color: "#436E70",
                            borderColor: "#436E70",
                        }}
                    >
                        Skip this break
                    </Button>
                    <FontAwesomeIcon
                        icon={faGear}
                        style={{
                            fontSize: "44px",
                            position: "absolute",
                            right: "-10px",
                        }}
                    />
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default Timer;
