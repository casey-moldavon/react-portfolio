import React from 'react';
import { Navbar, Nav, Row, Form } from 'react-bootstrap';
import Skills from '../Skills';
import './style.css';

function Navb () {
    return (
        <div>
            <Navbar fixed="top" id="navbar" variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mr-auto">

                <Form inline>
                    <Navbar.Brand>
                        <Row>
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

                    <Skills/>

                </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navb;