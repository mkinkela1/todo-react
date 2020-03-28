import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ListTasks from './ListTasks';
import CreateTask from './CreateTasks';

class Tasks extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <ListTasks />
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <CreateTask />
            </Col>
          </Row>
        </Container>
    );
  }
}

export default Tasks;