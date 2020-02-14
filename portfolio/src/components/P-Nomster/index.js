import React, { useState } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import './style.css';


function NomsterP(){
    const [showNS, setShowNS] = useState(false);
    const handleClose = () => setShowNS(false);
    const handleShow = () => setShowNS(true);

    return (

        <div>
            <>
            <Button className="text-center" id="p-button" onClick={handleShow}>
                Nomster
            </Button>

            <Modal show={showNS} onHide={handleClose}>
                    <Image id="modal-image" src={require("../Projects/images/nomster.png")} />

                    <Button href="https://casey-moldavon.github.io/Nomster/" id="live-nomster-button">See it Live</Button>
            </Modal>
            </>
        </div>
    )
}

export default NomsterP;