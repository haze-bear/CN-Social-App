import React from 'react'
import './Notifications.css'


class Notifications extends React.Component {

    render() {
        return (

            <div className="Notifications">
                <h1>Notifications</h1>
                <div className="notification-container">
                    <div class="notification-item">
                        <div class="heart"></div>
                        <div class="notification">Rihanna started to follow you</div>
                        <div class="new-notif"></div>
                    </div>

                    <div class="notification-item">
                        <div class="heart"></div>
                        <div class="notification">Rihanna liked your Duck</div>
                        <div class="new-notif"></div>
                    </div>
                    
                    <div class="notification-item">
                        <div class="heart"></div>
                        <div class="notification">Rihanna retweets your Duck</div>
                        <div class="new-notif"></div>
                    </div>
                </div>
                <div className="more"><p>more...</p></div>
            </div>
        )
    }
}

export default Notifications