import React from 'react';
import logoyellowbg from '../logoyellowbg.svg';
import "./RightNav.css";


class RightNav extends React.Component {


    render() {
        return (
            <div>
                <div>
                    <img src={logoyellowbg} className="App-logo" alt="logo" />
                    <h1>duck.io</h1>
                </div>
                <h1 className="RightNav">RightNav</h1>
            </div>
        )
    }


}

export default RightNav