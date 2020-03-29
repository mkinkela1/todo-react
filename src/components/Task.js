import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import {
  Link
} from "react-router-dom";

import { API_URL } from './../config';
class Task extends Component {

  constructor(props) {
    super(props);

    this.state = {
      task: {}
    };
  }

  componentDidMount() {

    const { id } = this.props.match.params;

    fetch(`${ API_URL }/api/tasks/${id}`)
      .then(r => r.json())
      .then(task => this.setState({task: task[0]}))
      .catch(e => console.log(e));
  }

  render() { 

    const { name, description, createdAt } = this.state.task;

    console.log(this.state);

    return (
      <Container>
        <Card className='cardGetTask'>
          <Card.Header>{name}</Card.Header>
          <Card.Body>
            <Card.Text>
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="/">Back</Link>
          </Card.Footer>
        </Card>
      </Container>
    );
  }
}

export default Task;