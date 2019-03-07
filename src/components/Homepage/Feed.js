import React from 'react';
import Post from "./Post"
import FakeData from "../../fakedata.json"

class Feed extends React.Component {



    render() {
        // Sample posts
        // Change max posts loaded on start
        let maxPosts = 7
        let postArr = []
        for (let i = 0; i < maxPosts; i++) {
            let j = Math.floor((Math.random()* 3))
            let k = Math.floor((Math.random()* 3))
            let post =
                <Post
                    DisplayName={FakeData[j].displayName}
                    UserName={FakeData[j].uniqueID}
                    PostBody={FakeData[j].posts[k].postContent}
                />
                
            postArr.push(post)
        }



        return (
            <div className="Feed">
                <h1>Feed</h1>
                {this.props.post}
                {postArr}

            </div>
        )
    }


}

export default Feed