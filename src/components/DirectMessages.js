import React, { Component } from 'react';
import logoyellowbg from '../logoyellowbg.svg';
import DirectMessagesContacts from './DirectMessagesContacts.js';


class DirectMessages extends Component {


  render() {
    return (
      <div className="DirectMessages">
          <DirectMessagesContacts />
          <div className="dmCont">
          
          </div>
      </div>
    );
  }
}

export default DirectMessages;
