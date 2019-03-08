import React from 'react'
import logoyellowbg from '../../logoyellowbg.svg';
import './Logo.css'

class Logo extends React.Component {

    render() {
        return (
            <div className="LogoGrid">
                <img src={logoyellowbg} className="App-logo" alt="logo" />
                <div className="App-webpageName"><h1>duck.io</h1></div>
            </div>
        )
    }
}

export default Logo