import React, { useState } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import './style.css';


function PortfolioP(){
    const [showPO, setShowPO] = useState(false);
    const handleClose = () => setShowPO(false);
    const handleShow = () => setShowPO(true);

    return (

        <div>
            <>
            <Button className="text-center" id="p-button" onClick={handleShow}>
                Portfolio
            </Button>

            <Modal show={showPO} onHide={handleClose}>
                    <Image id="modal-image" src={require("../Projects/images/portfolio.png")} />

                    <Button href="https://casey-moldavon.github.io/updated-portfolio-2/" id="live-port-button">See it Live</Button>
            </Modal>
            </>
        </div>
    )
}

export default PortfolioP;