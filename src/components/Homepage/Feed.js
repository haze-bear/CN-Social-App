import React from 'react';
import Post from "./Post"
import FakeData from "../../fakedata.json"
import './Feed.css'

class Feed extends React.Component {

    constructor() {
        super()
        this.state = {
            post:[]
        }
    }


samplePosts = () => {
        // Sample posts
        // Change max posts loaded on start
        let maxPosts = 7
        let postArr = []
        for (let i = 0; i < maxPosts; i++) {
            //random user
            let j = Math.floor((Math.random()* 3))
            //random post
            let k = Math.floor((Math.random()* 3))
            let post =
                <Post
                    DisplayName={FakeData[j].displayName}
                    UserName={FakeData[j].uniqueID}
                    PostBody={FakeData[j].posts[k].postContent}
                />
            postArr.push(post)
        }
        this.setState({post: [postArr]})
}

componentDidMount(){
    this.samplePosts()
}

    render() {

        return (
            <div className="Feed">
                <h1 className="feed-title">Feed</h1>
                <div className="feed-container">
                    {this.props.post}
                    {this.state.post}
                </div>
                
            </div>
        )
    }
}

export default Feed