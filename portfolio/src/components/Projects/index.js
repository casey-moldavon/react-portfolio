import React from 'react';
import { Card, Row } from 'react-bootstrap';
import './style.css';

function Projects(){
    return (
    <div>
        <Row>
            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/clicky-game.png")} />
                        <Card.Body>
                            <Card.Title href="https://casey-moldavon.github.io/clicky-game/" className="project-text">Clicky Game</Card.Title>
                        </Card.Body>
                </Card>
            </div>
            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/portfolio.png")} />
                        <Card.Body>
                            <Card.Title href="https://casey-moldavon.github.io/updated-portfolio-2/" className="project-text">portfolio</Card.Title>
                        </Card.Body>
                </Card>
            </div>

            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/workout-tracker.png")} />
                        <Card.Body>
                            <Card.Title href="https://exercise-app-backend-repair.herokuapp.com/?id=5e3dd92260ec0300174fb420" className="project-text">Workout Tracker</Card.Title>
                        </Card.Body>
                </Card>
            </div>

            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/medieval-avatars.png")} />
                        <Card.Body>
                            <Card.Title href="https://radiant-plateau-35150.herokuapp.com/" className="project-text">Medieval Avatars</Card.Title>
                        </Card.Body>
                </Card>
            </div>

            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/nomster.png")} />
                        <Card.Body>
                            <Card.Title href="https://casey-moldavon.github.io/Nomster/" className="project-text">Nomster</Card.Title>
                        </Card.Body>
                </Card>
            </div>

            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/note-taker.png")} />
                        <Card.Body>
                            <Card.Title href="https://github.com/casey-moldavon/note-taker" className="project-text">Note Taker</Card.Title>
                        </Card.Body>
                </Card>
            </div>

            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/password-generator.png")} />
                        <Card.Body>
                            <Card.Title href="https://casey-moldavon.github.io/password-generator/" className="project-text">Password Generator</Card.Title>
                        </Card.Body>
                </Card>
            </div>

            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/code-quiz.png")} />
                        <Card.Body>
                            <Card.Title href="https://casey-moldavon.github.io/code-quiz/" className="project-text">Code Quiz</Card.Title>
                        </Card.Body>
                </Card>
            </div>

            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/crew-builder.gif")} />
                        <Card.Body>
                            <Card.Title href="https://github.com/casey-moldavon/empire-crew-registry" className="project-text">Crew Builder</Card.Title>
                        </Card.Body>
                </Card>
            </div>

            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/day-planner.png")} />
                        <Card.Body>
                            <Card.Title href="https://casey-moldavon.github.io/day-planner/" className="project-text">Day Planner</Card.Title>
                        </Card.Body>
                </Card>
            </div>

            <div className="card-div">
                <Card className="text-center bg-transparent" id="project-card">
                    <Card.Img variant="top" id="project-image" src={require("./images/employee-management.gif")} />
                        <Card.Body>
                            <Card.Title href="https://github.com/casey-moldavon/employee-management-system" className="project-text">Employee Management</Card.Title>
                        </Card.Body>
                </Card>
            </div>

        </Row>
    </div>
    )
};

export default Projects;