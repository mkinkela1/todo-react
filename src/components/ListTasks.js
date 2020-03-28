import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Icon from 'react-eva-icons';

class ListTasks extends Component {

  constructor(props) {
    super(props);
    
    this.state = {};
  }

  render() {
    
    return (
      <Container className='listTasks'>
        {
          this.props.tasks.map(task => (
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
                    <Button variant='primary' size='sm' onClick={(e) => this.props.deleteTask(e, task._id)}>
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