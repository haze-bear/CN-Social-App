import React, { Component } from 'react';
import './DirectMessages.css';


const DirectMessagesContacts = props => (
      <div className="DirectMessagesContacts">
        <div className="DmContactCont">
            <div className="dmContactPic"><img src={props.pp} className="dmContactPic"></img></div>
            <div className="dmContactName"><h1>{props.name}</h1></div>
            <div className="dmContactNotification"></div>
        </div>
      </div>
    );

export default DirectMessagesContacts;
