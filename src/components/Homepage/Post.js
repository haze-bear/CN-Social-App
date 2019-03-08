import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
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
        if(state){
            this.setState({clickedLike: false})
        } else {
            this.setState({clickedLike: true})
        }
    }

    clickedSave = (state) => {
        if(state){
            this.setState({clickedSave: false})
        } else {
            this.setState({clickedSave: true})
        }
    }

    clickedComment = (state) => {
        if(state){
            this.setState({clickedComment: false})
        } else {
            this.setState({clickedComment: true})
        }
    }

    checkClicked = (clicked) => {
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
            if (!this.state.clickedLike){
                if (this.state.hoverLike){
                    return ["fas", "heart"]
                } else {
                return  ["far", "heart"]
                }
            } else {
                return ["fas", "heart"]
            }
        }

        const clickedSave = () => {
            if (!this.state.clickedSave){
                if (this.state.hoverSave){
                    return ['fas', 'bookmark']
                } else {
                return  ['far', 'bookmark']
                }
            } else {
                return ['fas', 'bookmark']
            }
        }

        const clickedComment = () => {
            if (!this.state.clickedComment){
                if (this.state.hoverComment){
                    return ['fas', 'comment-alt']
                } else {
                return  ['far', 'comment-alt']
                }
            } else {
                return ['fas', 'comment-alt']
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
                        <div className="postIconLeft">
                            <FontAwesomeIcon
                                onMouseEnter={() => this.setButtonHoveredLike(true)} 
                                onMouseLeave={() => this.setButtonHoveredLike(false)}
                                onMouseUp={() => this.clickedLike(this.state.clickedLike)}
                                icon={clickedLike()}
                            />
                        </div>
                        <div className="postIconCenter">
                            <FontAwesomeIcon 
                                onMouseEnter={() => this.setButtonHoveredSave(true)} 
                                onMouseLeave={() => this.setButtonHoveredSave(false)}
                                onMouseUp={() => this.clickedSave(this.state.clickedSave)}
                                icon={clickedSave()}
                            />
                        </div>
                        <div className="postIconRight">
                            <FontAwesomeIcon
                                onMouseEnter={() => this.setButtonHoveredComment(true)} 
                                onMouseLeave={() => this.setButtonHoveredComment(false)}
                                onMouseUp={() => this.clickedComment(this.state.clickedComment)}
                                icon={clickedComment()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post