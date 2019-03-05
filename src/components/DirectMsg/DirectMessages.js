import React, { Component } from 'react';
import logoyellowbg from '../../logoyellowbg.svg';
import DirectMessagesContactContainer from './DirectMessagesContactContainer.js';


class DirectMessages extends Component {


  render() {
    return (
      <div className="DirectMessages">
          <DirectMessagesContactContainer />
          <div className="dmCont">
          
          </div>
      </div>
    );
  }
}

export default DirectMessages;
