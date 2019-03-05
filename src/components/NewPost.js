import React from 'react';


class NewPost extends React.Component{

    

    constructor(props){
        super(props)
        this.state = {
            term: "",
            post:"",

        }
    }

    

    // typingHandler = (event) => {
    //     this.setState({term: event.target.value})
    // }

    // submitHandler = (event) => {
        // event.preventDefault()
        // this.setState({term: "", post: this.state.term})
        
    // }

    

    render(){
        

        return(
            <div className="NewPost">
                <h1>New Post</h1>
                <form onSubmit={this.props.postButton}>
                <input value={this.props.term} onChange={this.props.typingHandler} />
                <button>Submit</button>
                </form>
            </div>
        )
    }


}

export default NewPost