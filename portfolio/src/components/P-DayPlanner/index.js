import React, { useState } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import './style.css';


function DayPlannerP(){
    const [showDP, setShowDP] = useState(false);
    const handleClose = () => setShowDP(false);
    const handleShow = () => setShowDP(true);

    return (

        <div>
            <>
            <Button className="text-center" id="p-button" onClick={handleShow}>
                Day Planner
            </Button>

            <Modal show={showDP} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Image id="modal-image" src={require("../Projects/images/day-planner.png")} />
                    <Modal.Title className="text">Day Planner</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                    <Button href="https://casey-moldavon.github.io/day-planner/" className="text-center">See it Live</Button>
                </Modal.Footer>
            </Modal>
            </>
        </div>
    )
}

export default DayPlannerP;