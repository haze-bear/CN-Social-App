import React from 'react';
import './Following.css';
import DefaultProfile from '../../images/userphoto/DefaultProfile.jpg'

const Following = (props) => {

        return(
            <div className="Following">
                <h1>Following </h1>
                <h1>{props.following}32</h1>
                <div className="following-grid">
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

export default Following;