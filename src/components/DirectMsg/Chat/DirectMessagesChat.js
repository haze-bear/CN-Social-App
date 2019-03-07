import React, { Component } from 'react';
import ChatRow from './ChatRow.js'


class DirectMessagesChat extends Component {


  render() {
    return (
      <div className="DirectMessagesChatCont">
        <ChatRow sr="Send"/>
        <ChatRow sr="Recieved"/>
        <ChatRow sr="Recieved"/>
        <ChatRow sr="Send"/>
        <ChatRow sr="Recieved"/>
        <ChatRow sr="Send"/>
        <ChatRow sr="Send"/>
      </div>
    );
  }
}

export default DirectMessagesChat
