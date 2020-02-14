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
                    <Image id="modal-image" src={require("../Projects/images/note-taker.png")} />

                    <Button href="https://github.com/casey-moldavon/note-taker" id="live-note-button">See it Live</Button>
            </Modal>
            </>
        </div>
    )
}

export default NoteTakerP;