import React from 'react';
import './Post.css'


class Post extends React.Component{

    constructor() {
        super()
        this.state = {
            hoverLike: false,
            hoverSave: false,
            hoverComment: false,
            clickedLike: false,
        }
    }

    setButtonHoveredLike = (hover) => {
        if (hover){
            this.setState({hoverLike:true})
        } else {
            this.setState({hoverLike:false})
        }
    }

    setButtonHoveredSave = (hover) => {
        if (hover){
            this.setState({hoverSave:true})
        } else {
            this.setState({hoverSave:false})
        }
    }

    setButtonHoveredComment = (hover) => {
        if (hover){
            this.setState({hoverComment:true})
        } else {
            this.setState({hoverComment:false})
        }

    }

    clicked = (state) => {
        console.log("hello")
        console.log(state)
        if(state){
            this.setState({clickedLike: false})
        } else {
            this.setState({clickedLike: true})
        }
    }


    render(){
        return(
            <div className="postCont">
                <div className="postHeader">
                    <div className="postProfilePic"></div>
                    <div className="postDisplayName"><h1>{this.props.DisplayName}</h1></div>
                    <div className="postUserName"><h2>@{this.props.UserName}</h2></div>
                
                    <div className="postBody"><p>{this.props.PostBody}</p></div>
                    <div className="postActions">
                        <div className="postIconLeft"><i
                        onMouseEnter={() => this.setButtonHoveredLike(true)} 
                        onMouseLeave={() => this.setButtonHoveredLike(false)}
                        onMouseUp={() => this.clicked(this.state.clickedLike)}
                        class={this.state.hoverLike ? "fas fa-heart" : "far fa-heart"}
                        
                        
                        ></i></div>
                        <div className="postIconCenter"><i 
                        onMouseEnter={() => this.setButtonHoveredSave(true)} 
                        onMouseLeave={() => this.setButtonHoveredSave(false)}
                        class={this.state.hoverSave ? "fas fa-bookmark" : "far fa-bookmark"}>
                        </i></div>
                        <div className="postIconRight"><i
                        onMouseEnter={() => this.setButtonHoveredComment(true)} 
                        onMouseLeave={() => this.setButtonHoveredComment(false)}
                        class={this.state.hoverComment ? "fas fa-comment-alt" : "far fa-comment-alt"}
                         ></i></div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Post