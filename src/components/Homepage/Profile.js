import React from 'react';
import './Profile.css'
import DefaultProfile from '../../images/userphoto/DefaultProfile.jpg';

import {Link} from 'react-router-dom';

class Profile extends React.Component {

    render(){
        return(
            <div>
                <Link to="/profilepage">
                    <div className="Profile">
                        <img src={DefaultProfile} className="profilePic" alt="user-profile"/>
                        <div className="profileDisplayName"><h1>John Smith</h1></div>
                        <div className="profileThoughtsDucked"><h5>20 <font color="#27B1BE">thoughts</font> ducked</h5></div>
                    </div> 
                </Link>
            </div>
        )
    }


}
        
export default Profile