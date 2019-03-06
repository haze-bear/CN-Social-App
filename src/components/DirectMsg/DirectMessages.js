import React, { Component } from 'react';
import DirectMessagesContactContainer from './DirectMessagesContactContainer.js';
import DirectMessagesChat from './Chat/DirectMessagesChat.js'


class DirectMessages extends Component {


  render() {
    return (
      <div className="DirectMessages">
          <DirectMessagesContactContainer />
          <DirectMessagesChat />
      </div>
    );
  }
}

export default DirectMessages;
