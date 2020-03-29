import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ListTasks from './ListTasks';
import CreateTask from './CreateTasks';
import { API_URL } from './../config';
 
class Tasks extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      tasks: []
    };

    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentDidMount() {

    fetch(`${API_URL}/api/tasks`)
      .then(r => r.json())
      .then(r => this.setState({ tasks: r }))
      .catch(e => console.log(e))
  }

  deleteTask(e, id) {
    
    e.preventDefault();   

    fetch(`${API_URL}/api/tasks/${id}`, {
      method: 'DELETE'
    })
      .catch(e => console.log(e));

    const tasks = this.state.tasks.filter(({_id}) => {return _id !== id});
    this.setState({tasks});
  }

  createTask(name, description) {

    const data = {
      name,
      description
    };

    fetch(`${API_URL}/api/tasks/`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then(r => {
        console.log(r);
        
        this.setState(prevState => ({
          tasks: [...prevState.tasks, r]
        }));
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <ListTasks tasks={this.state.tasks} deleteTask={this.deleteTask}/>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <CreateTask createTask={this.createTask} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tasks;