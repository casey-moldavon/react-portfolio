import React from 'react';
import { Navbar, Nav, Row, Form, Col } from 'react-bootstrap';
import './style.css';

import Bio from '../Bio';
import Skills from '../Skills';

function Navb () {
    return (
        <div>
            <Navbar id="navbar" variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mr-auto">

                <Form inline>
                    <Navbar.Brand>
                        <Row className="nav-title">
                            <p id="c" >C</p>
                            <p id="a" >a</p>
                            <p id="s" >s</p>
                            <p id="e" >e</p>
                            <p id="y" >y</p>
                            <p id="mark" >'</p>
                            <p id="s2" >s </p>
                            <p id="port"> Portfolio </p>
                        </Row>
                    </Navbar.Brand>
                    </Form>

                    <Col className="text-center">
                        <a id="nav-git" href="#https://github.com/casey-moldavon"><i id="git" class="fab fa-github-square"></i></a>
                        <p id="git-text">GitHub</p>
                    </Col>
                    <Col className="text-center">
                        <a id="nav-linked" href="https://www.linkedin.com/in/casey-moldavon-442a1761/"><i id="linked" class="fab fa-linkedin"></i></a>
                        <p id="linked-text">LinkedIn</p>
                    </Col>
                    <Col className="text-center">
                        <a id="nav-medium" href="https://medium.com/@cmoldavon"><i id="medium" class="fab fa-medium"></i></a>
                        <p id="medium-text">Medium</p>
                    </Col>
                    <Col className="text-center">
                        <a id="nav-dropbox" href="https://www.dropbox.com/home/New%20Resume?preview=Casey+Moldavon+Resume+(1).docx"><i id="dropbox" class="fab fa-dropbox"></i></a>
                        <p id="dropbox-text">Resume</p>
                    </Col>

                    <Bio/>
                    <Skills/>

                </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navb;