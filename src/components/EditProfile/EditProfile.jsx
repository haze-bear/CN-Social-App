import React from 'react';

class EditProfile extends React.Component {
    state = {
        name: "",
        username: "",
        bio: "",
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value,
            username: event.target.value,
            bio: event.target.value,
        })
    }

    
    render() {
        const {name, username, bio, handleChange} = this.state

        return (
            <div>
                <form>
                    <label for="name">Name:</label><input type="text" value={name} onChange={(event) => handleChange(event)}/>
                    <label for="username">Username:</label><input type="text" value={username} onChange={(event) => handleChange(event)}/>
                    <label for="bio-caption">Bio:</label><textarea rows="8" value={bio} onChange={(event) => handleChange(event)}></textarea>
                </form>
            </div>
        )
    }
}

export default EditProfile;