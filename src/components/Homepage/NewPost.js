import React from 'react';
import "./NewPost.css";


class NewPost extends React.Component{

    

    constructor(props){
        super(props)
        this.state = {
            term: "",
            post:[],

        }
    }

    
    render(){
        

        return(
            <div>
                <form className="NewPost" onSubmit={this.props.postButton}>
                    <textarea rows="8" className="newPostThoughts" placeholder="Share your thoughts..." value={this.props.term} onChange={this.props.typingHandler} />
                    <button className="newPostDuckIt">Duck</button>
                </form>
            </div>
        )
    }


}

export default NewPost