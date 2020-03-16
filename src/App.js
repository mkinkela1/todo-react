import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import ListTasks from './components/ListTasks';
import CreateTask from './components/CreateTasks';

class App extends Component {

  render() {
    return (
      <div className="App">
        <CreateTask />
        <ListTasks />
      </div>
    );
  }
};

export default App;
