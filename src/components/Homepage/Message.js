import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./Message.css";


class Message extends React.Component{

    render(){
        return(
            <div className="directMessage">
                <FontAwesomeIcon icon={['far', 'comments']}  size="3x" color="#fff"/>
            </div>
        )
    }
}

export default Message