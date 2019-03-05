import React from 'react';
import Post from "./Post"


class Feed extends React.Component{

    

    render(){

        // let maxPosts = 2
        // let postArr = this.props.post
        // for (let i = 0; i < maxPosts; i++){
        //     postArr.push(
        //         <Post
        //         DisplayName={"Connor Rooney"}
        //         UserName={"DefaultUser"}
        //         PostBody={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum dui et porttitor varius. Mauris sit amet convallis turpis. Phasellus tortor dui, posuere vel consectetur eu, convallis sit amet ipsum. Nulla viverra, odio quis aliquam condimentum, ante velit viverra ipsum, quis cursus purus nibh in quam. Integer sed libero felis. Morbi a urna posuere..."}
        //         />
        //     )
        // }
        // if (this.props.submit){
        //     postArr.unshift(
        //         <Post
        //         DisplayName={"Ashley Bennett"}
        //         UserName={"ASHMA3STR0"}
        //         PostBody={this.props.newPost}
        //         />

        //     )
        //     //  this.setState({submit: false})
        // }

        return(
            <div className="Feed">
                <h1>Feed</h1>
                {this.props.post}
                {/* {postArr} */}
                
            </div>
        )
    }


}

export default Feed