import React, { Component } from 'react';

// import './App.css';
import LeftNav from "./components/Homepage/LeftNav"
import Feed from "./components/Homepage/Feed"
import RightNav from "./components/Homepage/RightNav"

import DirectMessages from "./components/DirectMsg/DirectMessages.js"


class App extends Component {


  render() {
    return (
      <div className="App">
        <DirectMessages />
      </div>
    );
  }
}

export default App;
