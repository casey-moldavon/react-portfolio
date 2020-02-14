import React from 'react';
import { Card, Row } from 'react-bootstrap';
import './style.css';

import WorkoutTracker from "../P-WorkoutTracke";
import Portfolio from "../P-Portfolio";
import PasswordGenerator from "../P-PasswordGenerator";
import NoteTaker from "../P-NoteTaker";
import Nomster from "../P-Nomster";
import MedievalAvatars from '../P-MedievalAvatars';
import EmployeeManagement from '../P-EmployeeManagement';
import DayPlanner from '../P-DayPlanner';
import CrewBuilder from '../P-CrewBuilder';
import CodeQuiz from '../P-CodeQuiz';
import ClickyGame from '../P-ClickyGame';

function Projects(){
    return (
    <div>
        <Row>
            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/clicky-game.png")} />
                        <Card.Body>
                            <ClickyGame/>
                        </Card.Body>
                </Card>
            </div>
            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/portfolio.png")} />
                        <Card.Body>
                            <Portfolio/>
                        </Card.Body>
                </Card>
            </div>

            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/workout-tracker.png")} />
                        <Card.Body>
                            <WorkoutTracker/>
                        </Card.Body>
                </Card>
            </div>

            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/medieval-avatars.png")} />
                        <Card.Body>
                            <MedievalAvatars/>
                        </Card.Body>
                </Card>
            </div>

            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/nomster.png")} />
                        <Card.Body>
                            <Nomster/>
                        </Card.Body>
                </Card>
            </div>

            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/note-taker.png")} />
                        <Card.Body>
                            <NoteTaker/>
                        </Card.Body>
                </Card>
            </div>

            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/password-generator.png")} />
                        <Card.Body>
                            <PasswordGenerator/>
                        </Card.Body>
                </Card>
            </div>

            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/code-quiz.png")} />
                        <Card.Body>
                            <CodeQuiz/>
                        </Card.Body>
                </Card>
            </div>

            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/crew-builder.gif")} />
                        <Card.Body>
                            <CrewBuilder/>
                        </Card.Body>
                </Card>
            </div>

            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/day-planner.png")} />
                        <Card.Body>
                            <DayPlanner/>
                        </Card.Body>
                </Card>
            </div>

            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/employee-management.gif")} />
                        <Card.Body>
                            <EmployeeManagement/>
                        </Card.Body>
                </Card>
            </div>

        </Row>
    </div>
    )
};

export default Projects;