import React, { useState } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import './style.css';


function CodeQuizP(){
    const [showCQ, setShowCQ] = useState(false);
    const handleClose = () => setShowCQ(false);
    const handleShow = () => setShowCQ(true);

    return (

        <div>
            <>
            <Button className="text-center" id="p-button" onClick={handleShow}>
                Code Quiz
            </Button>

            <Modal show={showCQ} onHide={handleClose}>
                    <Image id="modal-image" src={require("../Projects/images/code-quiz.png")} />

                    <Button href="https://casey-moldavon.github.io/code-quiz/" id="live-code-button">See it Live</Button>
            </Modal>
            </>
        </div>
    )
}

export default CodeQuizP;