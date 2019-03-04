import React, { Component } from 'react';
import logoyellowbg from './logoyellowbg.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logoyellowbg} className="App-logo" alt="logo" />
          <h1>duck.io</h1>
      </div>
    );
  }
}

export default App;
