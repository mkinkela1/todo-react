import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { API_URL } from '../config';

class CreateTask extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      showModal: false,
      taskName: '',
      taskDescription: ''
    };

    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }

  handleShowModal() {
    this.setState({showModal: true});
  }

  handleHideModal() {
    this.setState({showModal: false});
  }

  handleChange(e, key) {

    e.preventDefault();
    
    const { value } = e.target;

    this.setState({
      [key]: value
    });
  }

  saveChanges() {

    this.setState({showModal: false});

    const data = {
      name: this.state.taskName,
      description: this.state.taskDescription
    };

    fetch(`${API_URL}/api/tasks/`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then(r => console.log(r))
      .catch(e => console.log(e));
  }

  render() {  
    return (
      <div>
        <Button variant="secondary" onClick={this.handleShowModal}>Create Task</Button>

        <Modal show={this.state.showModal} onHide={this.handleHideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group controlId="taskName">
              <Form.Label>Task name</Form.Label>
              <Form.Control type="text" placeholder="Enter task name" required value={this.state.taskName} onChange={e => this.handleChange(e, 'taskName')}/>
            </Form.Group>

            <Form.Group controlId="taskDescription">
              <Form.Label>Task description</Form.Label>
              <Form.Control as="textarea" rows="3" required value={this.state.taskDescription1} onChange={e => this.handleChange(e, 'taskDescription')}/>
            </Form.Group>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleHideModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.saveChanges}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CreateTask;