import React, { Component } from 'react';
import ChatRow from './ChatRow.js'


class DirectMessagesChat extends Component {


  render() {
    return (
        <div className="DirectMsgChatCont">
            <div className="DirectMessagesChatCont">
                <ChatRow pp="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" sr="Send" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet quis sem eu tempus."/>
                <ChatRow sr="Recieved"  message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "/>
                <ChatRow pp="https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png" sr="Recieved"  message="Lorem ipsum dolor sit amet."/>
                <ChatRow pp="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" sr="Send"  message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet quis sem eu tempus.Proin porta id est vel tempus. Pellentesque fringilla felis at finibus posuere."/>
                <ChatRow pp="https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png" sr="Recieved" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet quis sem eu tempus. Proin porta id est vel tempus. "/>
                <ChatRow sr="Send" message={<img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Ringedteal.PNG"></img>}/>
                <ChatRow pp="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" sr="Send" read="Read 14:20" message="Lorem ipsum."/>

                <ChatRow pp="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" sr="Send" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet quis sem eu tempus."/>
                <ChatRow sr="Recieved"  message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "/>
                <ChatRow pp="https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png" sr="Recieved"  message="Lorem ipsum dolor sit amet."/>
                <ChatRow pp="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" sr="Send"  message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet quis sem eu tempus.Proin porta id est vel tempus. Pellentesque fringilla felis at finibus posuere."/>
                <ChatRow pp="https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png" sr="Recieved" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet quis sem eu tempus. Proin porta id est vel tempus. "/>
                <ChatRow sr="Send" message={<img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Ringedteal.PNG"></img>}/>
                <ChatRow pp="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" sr="Send" read="Read 14:20" message="Lorem ipsum."/>
            </div>

            <div className="MessageSendCont">
                <input className="MessageInput" placeholder="Message..."></input><input className="SendButton" type="submit" value="Send"></input>
            </div>
        </div>
    );
  }
}

export default DirectMessagesChat
