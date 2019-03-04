import React from 'react';
import Profile from "./Profile"
import NewPost from "./NewPost"

class LeftNav extends React.Component{

    render(){
        return(
            <div>
                <h1>Hello Left Nav</h1>
                {/* <Profile /> */}
                {/* <Search /> */}
                <NewPost />
                {/* <Message /> */}

            </div>
        )
    }


}

export default LeftNav