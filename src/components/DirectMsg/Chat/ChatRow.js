import React, { Component } from 'react';
import './Chat.css';


const ChatRow = props => (
    <div className="ChatRowCont">
        <div className={props.sr}>
            <div className="ChatProfilePic"><img className="ChatProfilePic" src={props.pp}></img></div>
      
            <div className="Message">
                <p className="MessageContent">{props.message}</p>
            </div>

            <div className="MessageStatus">
                <p>{props.read}</p>
            </div>
        </div>
    </div>
    );

export default ChatRow;