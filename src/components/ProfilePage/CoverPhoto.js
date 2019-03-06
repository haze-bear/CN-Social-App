import React from 'react';
import './CoverPhoto.css'
import DefaultCover from '../../images/coverphoto/DefaultCover.jpg';

const CoverPhoto = () => {
    return (
        <div>
            <img className="coverphoto" src={DefaultCover} alt="cover"/>
        </div>
    )
}

export default CoverPhoto;