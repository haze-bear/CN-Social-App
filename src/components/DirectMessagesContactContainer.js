import React, { Component } from 'react';
import './DirectMessages.css';
import DirectMessagesContact from './DirectMessageContact.js';


class DirectMessagesContactContainer extends Component {


  render() {
    return (
      <div className="DirectMessagesContactContainer">
        <DirectMessagesContact />
        <DirectMessagesContact />
        <DirectMessagesContact />
      </div>
    );
  }
}

export default DirectMessagesContactContainer;
