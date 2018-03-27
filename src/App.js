import React, { Component } from 'react';
import Login from './login';
import Materi from './materi';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <Materi />
      </div>
    );
  }
}

export default App;
