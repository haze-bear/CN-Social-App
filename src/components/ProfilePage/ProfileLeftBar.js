import React from 'react';
import ProfileDetails from './ProfileDetails';
import DefaultProfile from '../../images/userphoto/DefaultProfile.jpg';
import './ProfileLeftBar.css';

class ProfileLeftBar extends React.Component {
    render() {
        return (
            <div className="profile-left-wrapper">
                <img src={DefaultProfile} className="profile-photo" alt="user-profile"/>
                <ProfileDetails/>
                <button className="edit-profile-btn">Edit Profile</button>
            </div>
        )
    }
}

export default ProfileLeftBar;