import React from 'react';
<<<<<<< HEAD:src/components/RightNav.js
// import logoyellowbg from './logoyellowbg.svg';
=======
import logoyellowbg from '../../logoyellowbg.svg';
>>>>>>> 9fed75ae118aa9d2c6a04f8c3bb2fa115438d0a1:src/components/Homepage/RightNav.js
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