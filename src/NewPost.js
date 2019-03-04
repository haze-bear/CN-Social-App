import React from 'react';


class NewPost extends React.Component{

    

    constructor(props){
        super(props)
        this.state = {
            term: "",
            post:"",

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
        let newPost = this.state.post
        return(
            <div>
                <form className="Post" onSubmit={this.submitHandler}>
                <input value={this.state.term} onChange={this.typingHandler} />
                <button>Submit</button>
                </form>
            </div>
        )
    }


}

export default NewPost