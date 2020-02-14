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
                    <Image id="modal-image" src={require("../Projects/images/medieval-avatars.png")} />

                    <Button href="https://radiant-plateau-35150.herokuapp.com/" id="live-medieval-button">See it Live</Button>
            </Modal>
            </>
        </div>
    )
}

export default MedievalAvatarsP;