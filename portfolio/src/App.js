import React from 'react';

import { Row, Col } from 'react-bootstrap';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Navbar from './components/Navbar'
import "./App.css";


function App() {
  return (
    <div>
      <Navbar/>

      <div xs={4} id="profile-div">

          <Row>
              <Col>
                <AboutMe/>
              </Col>

            <Col xs={8} id="projects-col">
              <Projects/>
            </Col>

            <Col>
            </Col>
          </Row>

      </div>
    </div>
  );
}

export default App;