import React, { useState } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import './style.css';


function CrewBuilderP(){
    const [showCB, setShowCB] = useState(false);
    const handleClose = () => setShowCB(false);
    const handleShow = () => setShowCB(true);

    return (

        <div>
            <>
            <Button className="text-center" id="p-button" onClick={handleShow}>
                Crew Builder
            </Button>

            <Modal show={showCB} onHide={handleClose}>
                    <Image id="modal-image" src={require("../Projects/images/crew-builder.gif")} />

                    <Button href="https://github.com/casey-moldavon/empire-crew-registry" id="live-crew-button">See it Live</Button>
            </Modal>
            </>
        </div>
    )
}

export default CrewBuilderP;