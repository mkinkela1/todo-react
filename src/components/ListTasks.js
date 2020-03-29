import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import Icon from 'react-eva-icons';

import { 
  Link
} from "react-router-dom";

class ListTasks extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      page: 0
    };

    this.handleChangePageNumber = this.handleChangePageNumber.bind(this);
  }

  handleChangePageNumber(page) {
    this.setState({ page });
  }

  render() {

    const { page } = this.state;

    const tasks = this.props.tasks.map(task => (
      <Card key={task._id}>
        <Card.Body>
          <div className='task'>
            <div className='item'>
              <Link to={`/task/${task._id}`}>
                {task.name}
              </Link>
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
    ));

    const pagination = Array(tasks.length % 5 === 0 ? (tasks.length / 5) : (Math.floor(tasks.length / 5) + 1)).fill(null).map((val, idx) => (
      <Pagination.Item key={idx} active={ idx === page } onClick={() => this.handleChangePageNumber(idx)}>
        {idx+1}
      </Pagination.Item>
    ));

    return (

      <div>
        <Container className='listTasks'>
          {tasks.slice(page*5, (page+1)*5)}
        </Container>
        <Container className='paginationContainer'>
          <Pagination>
            {pagination}
          </Pagination>
        </Container>
      </div>

    );
  }
}

export default ListTasks;