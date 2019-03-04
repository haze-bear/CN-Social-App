import React, { Component } from 'react';
import './App.css';
import LeftNav from "./LeftNav"
import Feed from "./Feed"
import RightNav from "./RightNav"


class App extends Component {


  render() {
    return (
      <div className="App">
        <LeftNav />
        <Feed />
        <RightNav/>
      </div>
    );
  }
}

export default App;
