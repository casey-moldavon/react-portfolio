import React, { useState } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import './style.css';


function WorkoutTrackerP(){
    const [showWT, setShowWT] = useState(false);
    const handleClose = () => setShowWT(false);
    const handleShow = () => setShowWT(true);

    return (

        <div>
            <>
            <Button className="text-center" id="p-button" onClick={handleShow}>
                Workout Tracker
            </Button>

            <Modal show={showWT} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Image id="modal-image" src={require("../Projects/images/workout-tracker.png")} />
                    <Modal.Title className="text">Workout Tracker</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                    <Button href="https://exercise-app-backend-repair.herokuapp.com/?id=5e3dd92260ec0300174fb420" className="text-center">See it Live</Button>
                </Modal.Footer>
            </Modal>
            </>
        </div>
    )
}



export default WorkoutTrackerP;