import React from 'react'
import './ProfileCard.css'
import Cover from '../../img/cover.jpg';
import ProfileImage from '../../img/profileImg.jpg';


const ProfileCard = () => {
  return (
    <div className='profile-card'>
        <div className='profile-images'>
            <img src={Cover} alt="" height='120px'/>
            <img src={ProfileImage} alt="" />
        </div>

        <div className='profile-name'>
          <span>Random Name</span>
          <span>Senior Software Engineer</span>
        </div>

        <div className='follow-status'>
          <hr />
          <div>
          <div className='followers'>
            <span>1,645</span>
            <span>Following </span>
          </div>
          <div className='vertical-line'></div>
          <div className='following'>
            <span>200</span>
            <span>Followers</span>
          </div>
          </div>
          <hr/>
        </div>
        <span>
          My profile
        </span>
    </div>
  )
}

export default ProfileCard