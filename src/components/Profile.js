import React from 'react';
import './Profile.css'


class Profile extends React.Component{

    render(){
        return(
            <div className="Profile">
                <div className="leftHeader">
                    <div className="profilePic"></div>
                    <div className="profileDisplayName"><h1>John Smith</h1></div>
                    <div className="profileThoughtsDucked"><h5>20 <font color="#27B1BE">thoughts</font> ducked</h5></div>

                </div>
            </div>
        )
    }


}

export default Profile