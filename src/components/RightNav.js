import React from 'react';
// import logoyellowbg from './logoyellowbg.svg';
import "./RightNav.css";

import Followers from "./Followers"
import Following from "./Following"

class RightNav extends React.Component {

    render() {
        return (
            <div>
                {/* <div>
                    <img src={logoyellowbg} className="App-logo" alt="logo" />
                    <h1>duck.io</h1>
                </div> */}
                <h1 className="RightNav">RightNav</h1>
                <div className="Followers"><Followers /></div>
                <div className="Following"><Following /></div>
            </div>
            
        )
    }


}

export default RightNav