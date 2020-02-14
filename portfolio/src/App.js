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

      <div id="profile-div">

          <Row>
              <Col>
                <AboutMe/>
              </Col>

              <Col>
              </Col>


            <Col id="projects-col">
              <Projects/>
            </Col>
          </Row>

      </div>
    </div>
  );
}

export default App;