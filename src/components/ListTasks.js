import React, { Component } from 'react';
import { API_URL } from '../config';

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

  render() {
    
    return (
      <div>
        bla
      </div>
    );
  }
}

export default ListTasks;