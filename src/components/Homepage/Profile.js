import React from 'react';
<<<<<<< HEAD:src/components/Profile.js
import './Profile.css'

=======
import {Link} from 'react-router-dom';
>>>>>>> master:src/components/Homepage/Profile.js

class Profile extends React.Component{

    render(){
        return(
<<<<<<< HEAD:src/components/Profile.js
            <div className="Profile">
                <div className="leftHeader">
                    <div className="profilePic"></div>
                    <div className="profileDisplayName"><h1>John Smith</h1></div>
                    <div className="profileThoughtsDucked"><h5>20 <font color="#27B1BE">thoughts</font> ducked</h5></div>
=======
            <div>
                <h1 className="Profile"><Link to="/profilepage">Profile</Link></h1>
                
>>>>>>> master:src/components/Homepage/Profile.js

                </div>
            </div>
        )
    }


}

export default Profile