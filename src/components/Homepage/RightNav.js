import React from 'react';
import Logo from "./Logo";
import Notifications from "./Notifications";
import Trending from "./Trending";
import Settings from "./Settings"
import "./RightNav.css";

class RightNav extends React.Component {


    render() {
        return (
            <div className="right-nav">
                <Logo />
                <Notifications />
                <Trending/>
                <Settings />
            </div>
            
        )
    }


}

export default RightNav
