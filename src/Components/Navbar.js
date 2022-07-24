import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Nav = () => {
  // if url is a local folder use the format below
  // const imageUrl = require("../assets/<name of image with format>");  

  // if the url is from a site or http request use this format below
  const imageUrl = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80";  

    return (
        <>
            <Navbar className="nav">
                <Container fluid className="d-flex justify-content-end">
                    <Navbar.Brand href="#home">
                        <div
                            className="nav__profile"
                            style={{
                                backgroundImage: `url("${imageUrl}")`
                            }}
                        ></div>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default Nav;
