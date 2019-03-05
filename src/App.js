import React, { Component } from 'react';

import logoyellowbg from './logoyellowbg.svg';

import './App.css';
import LeftNav from "./components/Homepage/LeftNav"
import Feed from "./components/Homepage/Feed"
import RightNav from "./components/Homepage/RightNav"


class App extends Component {


  render() {
    return (
      <div className="App">
        <LeftNav />
        <Feed />
        <RightNav/>
          <img src={logoyellowbg} className="App-logo" alt="logo" />
          <h1>duck.io</h1>
      </div>
    );
  }
}

export default App;
