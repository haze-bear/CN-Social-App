import React from 'react';
import Post from "./Post"
import FakeData from "../../fakedata.json"

class Feed extends React.Component {



    render() {
        // Sample posts
        // Change max posts loaded on start
        let maxPosts = 2
        let postArr = []
        for (let i = 0; i < maxPosts; i++) {
            postArr.push(
                <Post
                    DisplayName={FakeData[0].displayName}
                    UserName={FakeData[0].uniqueID}
                    PostBody={FakeData[0].posts[i].postContent}
                />
            )
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