import React from 'react';
import './ProfileRightBar.css';

import Followers from "./Followers"
import Following from "./Following"

class ProfileRightBar extends React.Component {

    render() {
        return (
        <div>
                <h1 className="RightNav">RightNav</h1>
                <div className="Followers"><Followers /></div>
                <div className="Following"><Following /></div>
            </div>
    )
}
}

export default ProfileRightBar
