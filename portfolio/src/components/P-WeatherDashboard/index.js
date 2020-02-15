import React, { useState } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import './style.css';


function WeatherDashboardP(){
    const [showWD, setShowWD] = useState(false);
    const handleClose = () => setShowWD(false);
    const handleShow = () => setShowWD(true);

    return (

        <div>
            <>
            <Button className="text-center" id="p-button" onClick={handleShow}>
                Weather Dashboard
            </Button>

            <Modal show={showWD} onHide={handleClose}>
                    <Image id="modal-image" src={require("../Projects/images/weather-dashboard.png")} />

                    <Button href="https://casey-moldavon.github.io/weather-dashboard/" id="live-weather-button">See it Live</Button>
            </Modal>
            </>
        </div>
    )
}

export default WeatherDashboardP;