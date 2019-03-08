import React from 'react';
import './profileDetails.css';

const ProfileDetails = (props) => {
    return (
        <div className="profile-details">
            <h1>{props.fullname}John Smith</h1>
            <h3>{props.username}@john_smith</h3>
            <p>{props.bio} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I</p>
            <h5><strong><span>{props.totalPosts}20</span> <span className="total-posts">thoughts</span> ducked</strong></h5>
        </div>
    )
}

export default ProfileDetails;