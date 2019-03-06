import React from 'react'
import './Notifications.css'


class Notifications extends React.Component {

    render() {
        return (

            <div className="Notifications">
                <div><h1>Notifications</h1></div>
                <div class="notificationCont">
                    <div class="notification">a</div>
                    <div class="notification">b</div>
                    <div class="notification">c</div>
                    <div class="notification">d</div>
                    <div class="more"><h5>more..</h5></div>


                </div>


            </div>
        )
    }
}

export default Notifications