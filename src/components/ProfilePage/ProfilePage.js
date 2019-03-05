import React from 'react';
import './ProfilePage.css';

import ProfileLeftBar from './ProfileLeftBar';
import ProfileRightBar from './ProfileRightBar';
import ProfilePosts from './ProfilePosts';
import CoverPhoto from './CoverPhoto';

class ProfilePage extends React.Component {
    render() {
        return (
            <div className="profile-page-wrapper">
                <CoverPhoto/>
                <div className="profile-info">
                    <ProfileLeftBar className="item"/>
                    <ProfilePosts className="item"/>
                    <ProfileRightBar className="item"/>
                </div>
            </div>
        )
    }
}

export default ProfilePage;