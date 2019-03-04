import React from 'react';
import './components/profileDetails.css/';

const ProfileDetails = props => {
    return (
        <div>
            <h1>{props.fullname}</h1>
            <h3>{props.username}</h3>
            <p>{props.bio}</p>
            <p><strong><span>{props.totalPosts}</span> thoughts ducked</strong></p>
        </div>
    )
}