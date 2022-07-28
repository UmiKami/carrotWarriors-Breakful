import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Timer = () => {
    return (
        <Container
            style={{
                position: "relative",
                background: "white",
                height: "383px",
                width: "633px",
                boxShadow: "0px 23px 30px rgba(0,0,0,0.25)",
                zIndex: "1000",
            }}
        >
            <Row>
                <Col>1</Col>
                <Col>2</Col>
            </Row>
            <Row>
                <Col>1</Col>
                <Col>Mid</Col>
                <Col>2</Col>
            </Row>
            <Row>
                <Col>1</Col>
                <Col>Mid</Col>
                <Col>3</Col>
            </Row>
        </Container>
    );
};

export default Timer;
