import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import Tasks from './components/Tasks';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Tasks />
      </div>
    );
  }
};

export default App;
