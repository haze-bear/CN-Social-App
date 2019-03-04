import React from 'react';



class Post extends React.Component{

    

    render(){
        return(
            <div className="postCont">
                <div className="postHeader">
                    <div className="postProfilePic"></div>
                    <div className="postDisplayName"><h1>Connor Rooney</h1></div>
                    <div className="postUserName"><h2>@DefaultUser</h2></div>
                </div>
                <div className="postBody"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum dui et porttitor varius. Mauris sit amet convallis turpis. Phasellus tortor dui, posuere vel consectetur eu, convallis sit amet ipsum. Nulla viverra, odio quis aliquam condimentum, ante velit viverra ipsum, quis cursus purus nibh in quam. Integer sed libero felis. Morbi a urna posuere...</p></div>
                <div className="postActions">
                    <div className="postIconLeft"><i class="far fa-heart"></i></div>
                    <div className="postIconCenter"><i class="fas fa-redo"></i></div>
                    <div className="postIconRight"><i class="far fa-comment-alt"></i></div>
                </div>
            </div>
        )
    }


}

export default Post