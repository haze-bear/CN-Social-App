import React, { Component } from 'react';
import './DirectMessages.css'


class DirectMessagesContact extends Component {


  render() {
    return (
      <div className="DirectMessagesContact">
        <div className="DmContactCont">
            <div className="dmContactPic"></div>
            <div className="dmContactName"><h1>John Smith</h1></div>
            <div className="dmContactNotification"></div>
        </div>
      </div>
    );
  }
}

export default DirectMessagesContact;
