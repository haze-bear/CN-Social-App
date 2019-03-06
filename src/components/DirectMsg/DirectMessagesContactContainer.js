import React, { Component } from 'react';
import './DirectMessages.css';
import DirectMessagesContact from './DirectMessagesContacts.js';
import Search from "../Homepage/Search.js"


class DirectMessagesContactContainer extends Component {


  render() {
    return (
      <div className="DirectMessagesContactContainer">
        <Search />

        <DirectMessagesContact name="John Smith" pp="https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png" />
        <DirectMessagesContact name="Barry Scott" pp="https://cdn.iconscout.com/icon/free/png-256/avatar-376-456328.png"/>
        <DirectMessagesContact name="Jane Doe" pp="https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png"/>
      </div>
    );
  }
}

export default DirectMessagesContactContainer;
