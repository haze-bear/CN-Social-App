import React from 'react';
import Post from "./Post"
import FakeData from "../../fakedata.js"

class Feed extends React.Component{

    

    render(){
        // Sample posts
        // Change max posts loaded on start
        let maxPosts = 2
        let postArr = []
        for (let i = 0; i < maxPosts; i++){
            postArr.push(
                <Post
                DisplayName={FakeData.Users[0].displayName}
                UserName={"DefaultUser"}
                PostBody={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum dui et porttitor varius. Mauris sit amet convallis turpis. Phasellus tortor dui, posuere vel consectetur eu, convallis sit amet ipsum. Nulla viverra, odio quis aliquam condimentum, ante velit viverra ipsum, quis cursus purus nibh in quam. Integer sed libero felis. Morbi a urna posuere..."}
                />
            )
        }



        return(
            <div className="Feed">
                <h1>Feed</h1>
                {this.props.post}
                {postArr}
                
            </div>
        )
    }


}

export default Feed