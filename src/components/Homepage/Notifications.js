import React from 'react'
import './Notifications.css'


class Notifications extends React.Component {

    render() {
        return (

            <div className="Notifications">
                <div class> <h1><font color="#27B1BE">Notifications</font></h1></div>
                <div class="notificationCont">
                    <div class="heart"></div>
                    <div class="notification">Rihanna started to follow you</div>
                    <div class="onLine"></div>
                </div>
                <div class="more"><h5>more..</h5></div>
                <div class="notificationCont">
                    <div class="heart"></div>
                    <div class="notification">Rihanna liked your Duck</div>
                    <div class="onLine"></div>
                </div>
                <div class="more"><h5>more..</h5></div>
                <div class="notificationCont">
                    <div class="heart"></div>
                    <div class="notification">Rihanna retweets your Duck</div>
                    <div class="onLine"></div>
                </div>
                <div class="more"><h5>more..</h5></div>





            </div>
        )
    }
}

export default Notifications