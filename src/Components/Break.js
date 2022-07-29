import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const Break = ({duration}) => {
    const navigate = useNavigate()

    const [viewVideos, setViewVideos] = useState(false)
    const[hasRendered, setHasRendered] = useState(false)
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    if(duration < 60 && !hasRendered){
      setMinutes(duration)
      setHasRendered(true)
    }

    useEffect(() => {
        const timerInter = setInterval(() => {
            if (seconds <= 0 && minutes <= 0 && hours <= 0) {
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

    return (
        <Container
            style={{
                width: "700px",
                height: "525px",
                backgroundColor: "#629EA0",
                top: "-100px",
                zIndex: "1000",
                boxShadow: "0px 23px 30px rgba(0, 0, 0, 0.25)",
                color: "white",
                borderRadius: "15px",
            }}
            className="d-flex flex-column align-items-center justify-content-center gap-2 position-relative"
        >
            {!viewVideos ? (
                <>
                    <Row
                        className="d-flex text-center"
                        style={{ fontSize: "36px", fontWeight: "700" }}
                    >
                        <p>Time for some stretching</p>
                    </Row>
                    <Row className="d-flex text-center mb-3">
                        <p>
                            Want some stretching tutorial videos?{" "}
                            <span
                                style={{
                                    borderBottom: "1px solid white",
                                    fontWeight: "700",
                                    cursor: "pointer",
                                }}
                                onClick={() => setViewVideos(true)}
                            >
                                Click me!
                            </span>{" "}
                        </p>
                    </Row>
                    <Row className="text-center mb-5">
                        <p style={{ fontSize: "24px", margin: 0 }}>
                            You still have
                        </p>
                        <h3 style={{ fontSize: "48px" }}>
                            {hours >= 10 ? hours : hours ? "0" + hours : "00"}h
                            : {minutes >= 10 ? minutes : "0" + minutes}m :{" "}
                            {seconds >= 10 ? (
                                seconds
                            ) : !seconds ? (
                                <div
                                    class="spinner-border text-light"
                                    role="status"
                                >
                                    <span class="sr-only">Loading...</span>
                                </div>
                            ) : (
                                "0" + seconds
                            )}
                            s
                        </h3>
                    </Row>
                    <Row className="d-flex justify-content-center align-items-center position-relative">
                        <Button
                            style={{
                                width: "198px",
                                backgroundColor: "white",
                                color: "#4D4D4D",
                                border: "none",
                            }}
                        >
                            End break
                        </Button>
                        <FontAwesomeIcon
                            icon={faGear}
                            style={{
                                width: "fit-content",
                                position: "absolute",
                                fontSize: "28px",
                                right: "165px",
                                cursor: "pointer",
                                zIndex: 1000,
                            }}
                            className="awesome-Btn-wheel-2"
                            onClick={() => navigate("/dashboard")}
                        />
                    </Row>
                    <img
                        src={require("../assets/Fitz_Standing.png")}
                        alt="person stretching"
                        style={{
                            position: "absolute",
                            width: "285px",
                            right: "0",
                            bottom: "55px",
                        }}
                    />
                </>
            ) : (
                <>
                    <div
                        style={{
                            backgroundColor: "#373737",
                            width: "95%",
                            height: "85%",
                        }}
                    >
                        <Row>
                            <Col>
                                <iframe
                                    src="https://www.youtube.com/watch?v=Ef6LwAaB3_E"
                                    frameborder="0"
                                ></iframe>
                            </Col>
                            <Col>
                                <iframe
                                    src="https://www.youtube.com/watch?v=Ef6LwAaB3_E"
                                    frameborder="0"
                                ></iframe>
                            </Col>
                            <Col>
                                <iframe
                                    src="https://www.youtube.com/watch?v=Ef6LwAaB3_E"
                                    frameborder="0"
                                ></iframe>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <iframe
                                    src="https://www.youtube.com/watch?v=Ef6LwAaB3_E"
                                    frameborder="0"
                                ></iframe>
                            </Col>
                            <Col>
                                <iframe
                                    src="https://www.youtube.com/watch?v=Ef6LwAaB3_E"
                                    frameborder="0"
                                ></iframe>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <iframe
                                    src="https://www.youtube.com/watch?v=Ef6LwAaB3_E"
                                    frameborder="0"
                                ></iframe>
                            </Col>
                            <Col>
                                <iframe
                                    src="https://www.youtube.com/watch?v=Ef6LwAaB3_E"
                                    frameborder="0"
                                ></iframe>
                            </Col>
                            <Col>
                                <iframe
                                    src="https://www.youtube.com/watch?v=Ef6LwAaB3_E"
                                    frameborder="0"
                                ></iframe>
                            </Col>
                        </Row>
                    </div>
                </>
            )}
        </Container>
    );
};

export default Break;
