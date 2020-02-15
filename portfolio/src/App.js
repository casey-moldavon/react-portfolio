import React from 'react';

import { Row, Col } from 'react-bootstrap';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import "./App.css";


function App() {
  return (
    <div>
      <Navbar/>
        <Row>
          <Col xs={2}></Col>
          <Col>
            <Projects/>
          </Col>

          <Col xs={1}></Col>
        </Row>
    </div>
  );
}

export default App;