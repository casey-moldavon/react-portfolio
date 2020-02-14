import React, { useState } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import './style.css';


function EmployeeManagementP(){
    const [showEM, setShowEM] = useState(false);
    const handleClose = () => setShowEM(false);
    const handleShow = () => setShowEM(true);

    return (

        <div>
            <>
            <Button className="text-center" id="p-button" onClick={handleShow}>
                Employee Management
            </Button>

            <Modal show={showEM} onHide={handleClose}>
                    <Image id="modal-image" src={require("../Projects/images/employee-management.gif")} />

                    <Button href="https://github.com/casey-moldavon/employee-management-system" id="live-emp-button">See it Live</Button>
            </Modal>
            </>
        </div>
    )
}

export default EmployeeManagementP;