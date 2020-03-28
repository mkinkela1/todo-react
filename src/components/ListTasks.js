import React, { Component } from 'react';

import { API_URL } from '../config';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Icon from 'react-eva-icons';

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

  deleteTask(e, id) {
    
    e.preventDefault();   

    fetch(`${API_URL}/api/tasks/${id}`, {
      method: 'DELETE'
    })
      .catch(e => console.log(e));

    const tasks = this.state.tasks.filter(({_id}) => {return _id !== id});
    this.setState({tasks});
  }

  render() {
    
    return (
      <Container className='listTasks'>
        {
          this.state.tasks.map(task => (
            <Card key={task._id}>
              <Card.Body>
                <div className='task'>
                  <div className='item'>
                    {task.name}
                  </div>
                  <div className='item'>
                    <Button variant='primary' size='sm'>
                      <Icon 
                        name="edit-outline"
                        size="medium"     // small, medium, large, xlarge
                        animation={{
                          type: "pulse",  // zoom, pulse, shake, flip
                          hover: true,
                          infinite: false 
                        }}
                      />
                    </Button>
                    <Button variant='primary' size='sm' onClick={(e) => this.deleteTask(e, task._id)}>
                      <Icon 
                        name="trash-outline"
                        size="medium"     // small, medium, large, xlarge
                        animation={{
                          type: "pulse",  // zoom, pulse, shake, flip
                          hover: true,
                          infinite: false 
                        }}
                      />
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))
        }
      </Container>
    );
  }
}

export default ListTasks;