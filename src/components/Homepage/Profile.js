import React from 'react';
import {Link} from 'react-router-dom';

class Profile extends React.Component{

    render(){
        return(
            <div>
                <h1 className="Profile"><Link to="/profilepage">Profile</Link></h1>
                

            </div>
        )
    }


}

export default Profile