import React, { Component } from 'react';

import logoyellowbg from './logoyellowbg.svg';

import './App.css';
import LeftNav from "./components/LeftNav"
import Feed from "./components/Feed"
import RightNav from "./components/RightNav"


class App extends Component {

  constructor() {
    super()
    this.state = {
        post:"",
        term:"",
        submit: false
        }
}

  // newPost = (post) => {
    
  // }

  postButton = (event) => {
        event.preventDefault()
        this.setState({term: "", post: this.state.term, submit:true})
        // this.newPost(this.state.post)
  }

  
   

  typingHandler = (event) => {
    this.setState({term: event.target.value})
}


  render() {
    return (
      <div className="App">

        <LeftNav 
        postButton={this.postButton}
        typingHandler={this.typingHandler}
        term={this.state.term}
        />
        <Feed 
        newPost={this.state.post}
        submit={this.state.submit}
        />
        <RightNav/>
          <img src={logoyellowbg} className="App-logo" alt="logo" />
          <h1>duck.io</h1>
      </div>
    );
  }
}

export default App;
