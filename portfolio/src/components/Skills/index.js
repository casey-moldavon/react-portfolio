import React, { useState } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import './style.css';


function Bio(){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div>
            <>
            <button className="text-center" id="skill-button" variant="primary" onClick={handleShow}>
                Skills
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title id="skill-text">Casey's Skills</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <div className="listed-skill">Communication</div>
                            <div className="listed-skill">Team Building</div>
                            <div className="listed-skill">Team Management</div>
                            <div className="listed-skill">HTML / CSS</div>
                            <div className="listed-skill">Bootstrap</div>
                            <div className="listed-skill">Materialize</div>
                            <div className="listed-skill">Javascript</div>
                            <div className="listed-skill">JQuery</div>
                        </Col>
                        <Col>
                            <div className="listed-skill">Node.js</div>
                            <div className="listed-skill">Express.js</div>
                            <div className="listed-skill">Express-Handlebars.js</div>
                            <div className="listed-skill">GitHub / Git</div>
                            <div className="listed-skill">MySQL</div>
                            <div className="listed-skill">Mongo db</div>
                            <div className="listed-skill">Mongoose</div>
                            <div className="listed-skill">Full Stack Development</div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
            </>
        </div>
    )
}

export default Bio;