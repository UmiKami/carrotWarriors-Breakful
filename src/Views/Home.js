import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Timer from "../Components/Timer";

const Home = () => {
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
                    <img src={require("../assets/LPimage.png")} alt="Landing page image" width="552px" />
                </Col>
                <Col>
                    {/* Use ternary operator to change to break timer if it is time to take a break */}
                    <Timer />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
