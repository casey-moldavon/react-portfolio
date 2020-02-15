import React, { useState } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import './style.css';


function ClickyGameP(){
    const [showCG, setShowCG] = useState(false);
    const handleClose = () => setShowCG(false);
    const handleShow = () => setShowCG(true);

    return (

        <div>
            <>
            <Button className="text-center" id="p-button" onClick={handleShow}>
                Clicky Game
            </Button>

            <Modal show={showCG} onHide={handleClose}>
                <Image id="modal-image" src={require("../Projects/images/clicky-game.png")} />

                <Button href="https://casey-moldavon.github.io/clicky-game/" id="live-clicky-button">See it Live</Button>
            </Modal>
            </>
        </div>
    )
}

export default ClickyGameP;