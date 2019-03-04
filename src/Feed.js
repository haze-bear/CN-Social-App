import React from 'react';
import NewPost from './NewPost';

class Feed extends React.Component{

    render(){
        return(
            <div>
                <h1>Hello Feed</h1>
                <h1>{NewPost.post}</h1>
            </div>
        )
    }


}

export default Feed