import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Post.css'


class Post extends React.Component{

    

    render(){
        return(
            <div className="postCont">
                <div className="postHeader">
                    <div className="postProfilePic"></div>
                    <div className="postDisplayName"><h1>{this.props.DisplayName}</h1></div>
                    <div className="postUserName"><h2>@{this.props.UserName}</h2></div>
                </div>
                <div className="postBody"><p>{this.props.PostBody}</p></div>
                <div className="postActions">
                    <div className="postIconLeft"><FontAwesomeIcon icon={['far', 'heart']}/></div>
                    <div className="postIconCenter"><FontAwesomeIcon icon={['far', 'bookmark']}/></div>
                    <div className="postIconRight"><FontAwesomeIcon icon={['far', 'comment-alt']}/></div>
                </div>
            </div>
        )
    }


}

export default Post