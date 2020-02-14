import React, { useState } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import './style.css';


function PasswordGeneratorP(){
    const [showPG, setShowPG] = useState(false);
    const handleClose = () => setShowPG(false);
    const handleShow = () => setShowPG(true);

    return (

        <div>
            <>
            <Button className="text-center" id="p-button" onClick={handleShow}>
                Password Generator
            </Button>

            <Modal show={showPG} onHide={handleClose}>
                    <Image id="modal-image" src={require("../Projects/images/password-generator.png")} />

                    <Button href="https://casey-moldavon.github.io/password-generator/" id="live-password-button">See it Live</Button>
            </Modal>
            </>
        </div>
    )
}

export default PasswordGeneratorP;