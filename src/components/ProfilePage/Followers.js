import React from 'react';
import './Followers.css';
import DefaultProfile from '../../images/userphoto/DefaultProfile.jpg'

const Followers = (props) => {
    return(
        <div className="Followers">
            <h1>Followers </h1>
            <h1>{props.followers}20</h1>
            <div className="followers-grid">
                <div>
                    <img src={DefaultProfile} alt="avatar"/>
                    <p>{props.userhandle}username</p>
                </div>

                <div>
                     <img src={DefaultProfile} alt="avatar"/>
                    <p>{props.userhandle}username</p>
                </div>

                <div>
                    <img src={DefaultProfile} alt="avatar"/>
                    <p>{props.userhandle}username</p>
                </div>

            </div>
            

        </div>
    )
}

export default Followers;