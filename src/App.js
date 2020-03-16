import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './App.scss';
import ListTasks from './components/ListTasks';
import CreateTask from './components/CreateTasks';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <CreateTask />
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <ListTasks />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default App;
