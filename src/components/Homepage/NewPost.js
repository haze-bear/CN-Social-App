import React from 'react';
import "../../NewPost.css";


class NewPost extends React.Component{

    

    constructor(props){
        super(props)
        this.state = {
            term: "",
            post:[],

        }
    }

    typingHandler = (event) => {
        this.setState({term: event.target.value})
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.setState({term: "", post: this.state.term})
        
    }

    

    render(){
        

        return(
            <div className="NewPost" >
                <h1>New Post</h1>
                <form onSubmit={this.submitHandler}>
                <input placeholder="Share your thoughts..." value={this.state.term} onChange={this.typingHandler} />
                <button>Submit</button>
                </form>
            </div>
        )
    }


}

export default NewPost