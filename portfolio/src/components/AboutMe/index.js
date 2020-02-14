import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './style.css';


function AboutMe(){
    return (

        <div className="card-div">
            <Card className="text-center" id="about-me-card">
                <Card.Img variant="top" id="profile-image" src={require("./images/profile-image.JPG")} />
                <Card.Body>
                    <Card.Title id="about-me-text">Casey's Links:</Card.Title>
                    <Row>
                        <Col>
                        <a id="nav-git" href="#https://github.com/casey-moldavon"><i id="git" class="fab fa-github-square"></i></a>
                        <a id="git-text" href="#https://github.com/casey-moldavon">GitHub</a>
                        </Col>
                        <Col>
                        <a id="nav-linked" href="https://www.linkedin.com/in/casey-moldavon-442a1761/"><i id="linked" class="fab fa-linkedin"></i></a>
                        <a id="linked-text" href="https://www.linkedin.com/in/casey-moldavon-442a1761/">LinkedIn</a>
                        </Col>
                        <Col>
                        <a id="nav-medium" href="https://medium.com/@cmoldavon"><i id="medium" class="fab fa-medium"></i></a>
                        <a id="medium-text" href="https://medium.com/@cmoldavon">Medium</a>
                        </Col>
                        <Col>
                        <a id="nav-dropbox" href="https://www.dropbox.com/home/New%20Resume?preview=Casey+Moldavon+Resume+(1).docx"><i id="dropbox" class="fab fa-dropbox"></i></a>
                        <a id="dropbox-text" href="https://www.dropbox.com/home/New%20Resume?preview=Casey+Moldavon+Resume+(1).docx">Resume</a>
                        </Col>


                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AboutMe;