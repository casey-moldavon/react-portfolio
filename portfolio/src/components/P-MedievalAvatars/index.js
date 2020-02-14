import React, { useState } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import './style.css';


function MedievalAvatarsP(){
    const [showMA, setShowMA] = useState(false);
    const handleClose = () => setShowMA(false);
    const handleShow = () => setShowMA(true);

    return (

        <div>
            <>
            <Button className="text-center" id="p-button" onClick={handleShow}>
                Medieval Avatars
            </Button>

            <Modal show={showMA} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Image id="modal-image" src={require("../Projects/images/medieval-avatars.png")} />
                    <Modal.Title className="text">Medieval Avatars</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                    <Button href="https://radiant-plateau-35150.herokuapp.com/" className="text-center">See it Live</Button>
                </Modal.Footer>
            </Modal>
            </>
        </div>
    )
}

export default MedievalAvatarsP;