import React from 'react';
import Profile from "./Profile"
import NewPost from "./NewPost"
import Search from "./Search"
import Message from "./Message"
import "./LeftNav.css";


class LeftNav extends React.Component{

    render(){
        return(
            <div className="left-nav">
                <Profile />
                <Search />
                <NewPost
                postButton={this.props.postButton}
                typingHandler={this.props.typingHandler}
                term={this.props.term}
                />
                <Message />

            </div>
        )
    }


}

export default LeftNav