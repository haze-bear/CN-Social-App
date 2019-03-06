import React, { Component } from 'react';

import logoyellowbg from './logoyellowbg.svg';

import './App.css';
import LeftNav from "./components/LeftNav"
import Feed from "./components/Feed"
import RightNav from "./components/RightNav"
import Post from "./components/Post"


class App extends Component {

  constructor() {
    super()
    this.state = {
        post:[],
        term:"",
    }
}

//When submit is pressed
  postButton = (event) => {
        event.preventDefault()
        if (this.state.term === ""){
          return
        }
        let posts = 
        <Post
          DisplayName={"Ashley Bennett"}
          UserName={"ASHMA3STR0"}
          PostBody={this.state.term}                
        />
        
        this.setState(prevState => ({
          post: [...prevState.post, posts], term:"",
        }))
  }

// As your typing
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
        post={this.state.post}
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
