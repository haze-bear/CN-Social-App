import React from 'react';
import './profileDetails.css';

const ProfileDetails = (props) => {
    return (
        <div className="profile-details">
            <h1>{props.fullname}fullname</h1>
            <h3>{props.username}@username</h3>
            <p>{props.bio}bio paragraph</p>
            <h5><strong><span>{props.totalPosts}20</span> <span className="total-posts">thoughts</span> ducked</strong></h5>
        </div>
    )
}

export default ProfileDetails;