import React, { Component } from 'react';

import { API_URL } from '../config';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class ListTasks extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {

    fetch(`${API_URL}/api/tasks`)
      .then(r => r.json())
      .then(r => this.setState({ tasks: r }))
      .catch(e => console.log(e))
  }

  deleteTask(id) {
    

    fetch(`${API_URL}/api/tasks/${id}`, {
      method: 'DELETE'
    })
      .then(r => r.json())
      .then(r => console.log(r)
      )
      .catch(e => console.log(e))
  }

  render() {
    
    return (
      <Container className='listTasks'>
        <ListGroup>
          {
            this.state.tasks.map(task => (
              <ListGroup.Item key={task._id}>
                <Row>
                  <Col md={8}>{task.name}</Col>
                  <Col md={2}>Edit</Col>
                  <Col md={2}>
                    <Button variant="danger" onClick={() => this.deleteTask(task._id)}>Delete</Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      </Container>
    );
  }
}

export default ListTasks;