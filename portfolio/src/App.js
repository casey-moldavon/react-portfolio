import React from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Navbar from './components/Navbar'
import "./App.css";


function App() {
  return (
    <div>
      <Navbar/>

      <div id="profile-div">

        <Container>
          <Row>
              <Col>
                <AboutMe/>
              </Col>


            <Col>
              <Projects/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;