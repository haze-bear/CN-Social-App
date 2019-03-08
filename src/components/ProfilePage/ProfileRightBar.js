import React from 'react';
import './ProfileRightBar.css';

import Followers from "./Followers"
import Following from "./Following"

class ProfileRightBar extends React.Component {

    render() {
        return (
        <div className="profilerightbar">
            <div className="Followers"><Followers /></div>
            <div className="Following"><Following /></div>
        </div>
    )
}
}

export default ProfileRightBar
