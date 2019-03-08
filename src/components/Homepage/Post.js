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
            clickedSave: false,
            clickedComment: false,
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

    clickedLike = (state) => {
        console.log(state)
        if(state){
            this.setState({clickedLike: false})
        } else {
            this.setState({clickedLike: true})
        }
    }

    clickedSave = (state) => {
        console.log(state)
        if(state){
            this.setState({clickedSave: false})
        } else {
            this.setState({clickedSave: true})
        }
    }

    clickedComment = (state) => {
        console.log(state)
        if(state){
            this.setState({clickedComment: false})
        } else {
            this.setState({clickedComment: true})
        }
    }

    checkClicked = (clicked) => {
        // console.log("hello")
        if (!clicked){
            if (this.state.hoverLike){
                return "fas fa-heart"
            } else {
            return  "far fa-heart"
            }
        } else {
            return "far fa-heart"
        }
    }


    render(){

        const clickedLike = () => {
            console.log("hello")
            if (!this.state.clickedLike){
                if (this.state.hoverLike){
                    return "fas fa-heart"
                } else {
                return  "far fa-heart"
                }
            } else {
                return "fas fa-heart"
            }
        }

        const clickedSave = () => {
            console.log("hello")
            if (!this.state.clickedSave){
                if (this.state.hoverSave){
                    return "fas fa-bookmark"
                } else {
                return  "far fa-bookmark"
                }
            } else {
                return "fas fa-bookmark"
            }
        }

        const clickedComment = () => {
            console.log("hello")
            if (!this.state.clickedComment){
                if (this.state.hoverComment){
                    return "fas fa-comment-alt"
                } else {
                return  "far fa-comment-alt"
                }
            } else {
                return "fas fa-comment-alt"
            }
        }

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
                        onMouseUp={() => this.clickedLike(this.state.clickedLike)}
                        class={clickedLike()}
                        ></i></div>
                        <div className="postIconCenter"><i 
                        onMouseEnter={() => this.setButtonHoveredSave(true)} 
                        onMouseLeave={() => this.setButtonHoveredSave(false)}
                        // class={this.state.hoverSave ? "fas fa-bookmark" : "far fa-bookmark"}
                        onMouseUp={() => this.clickedSave(this.state.clickedSave)}
                        class={clickedSave()}
                        >
                        </i></div>
                        <div className="postIconRight"><i
                        onMouseEnter={() => this.setButtonHoveredComment(true)} 
                        onMouseLeave={() => this.setButtonHoveredComment(false)}
                        // class={this.state.hoverComment ? "fas fa-comment-alt" : "far fa-comment-alt"}
                        onMouseUp={() => this.clickedComment(this.state.clickedComment)}
                        class={clickedComment()}
                         ></i></div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Post