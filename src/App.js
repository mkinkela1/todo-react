import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import Tasks from './components/Tasks';
import Task from './components/Task';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

class App extends Component {

  render() {

    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Tasks} />
          <Route exact path="/task/:id" component={Task} />
        </div>
      </Router>
    );
  }
};

export default App;
