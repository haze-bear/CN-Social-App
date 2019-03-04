import React from 'react';
import Post from "./Post"


class Feed extends React.Component{

    

    render(){
        return(
            <div className="Feed">
                <h1>Feed</h1>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        )
    }


}

export default Feed