import React, { useState } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import './style.css';


function NoteTakerP(){
    const [showNT, setShowNT] = useState(false);
    const handleClose = () => setShowNT(false);
    const handleShow = () => setShowNT(true);

    return (

        <div>
            <>
            <Button className="text-center" id="p-button" onClick={handleShow}>
                Note Taker
            </Button>

            <Modal show={showNT} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Image id="modal-image" src={require("../Projects/images/note-taker.png")} />
                    <Modal.Title className="text">Note Taker</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                    <Button href="https://github.com/casey-moldavon/note-taker" className="text-center">See it Live</Button>
                </Modal.Footer>
            </Modal>
            </>
        </div>
    )
}

export default NoteTakerP;