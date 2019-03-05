import React from 'react';
import Post from "./Post"


class Feed extends React.Component{

    

    render(){

        let maxPosts = 5

        let postArr = []
        for (let i = 0; i < maxPosts; i++){
            postArr.push(
                <Post
                />
            )
        }

        return(
            <div className="Feed">
                <h1>Feed</h1>
                {postArr}
                
            </div>
        )
    }


}

export default Feed