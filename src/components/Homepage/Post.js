import React from 'react';
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
                    <div className="postIconLeft"><i class="far fa-heart"></i></div>
                    <div className="postIconCenter"><i class="fas fa-redo"></i></div>
                    <div className="postIconRight"><i class="far fa-comment-alt"></i></div>
                </div>
            </div>
        )
    }


}

export default Post