import React, { Component } from 'react';

import './App.css';
import LeftNav from "./LeftNav"
import Feed from "./Feed"
import RightNav from "./RightNav"


class App extends Component {


  render() {
    return (
      <div className="App">
        <div class="LeftNav"><LeftNav /></div>
        <div class="Feed"><Feed /></div>
        <div class="RightNav"><RightNav /></div>
      </div>
    );
  }
}

export default App;
